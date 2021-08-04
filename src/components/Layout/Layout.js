import React, { useState } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

import {
  GlobalStyle,
  isBrowser,
} from '@utils';
import { Theme } from '@theme/main';

import { FixedHeader } from '@components';

const Layout = ({ children }) => {
  const [
    isMusicPlaying,
    setMusicPlaying,
  ] = useState(false);

  const htmlAttributes = { lang: 'pl' };
  const playerStyle = { display: 'none' };
  const playerSources = [
    {
      src: '/global-music.ogg',
      type: 'audio/ogg',
    },
    {
      src: '/global-music.mp3',
      type: 'audio/mp3',
    },
  ];

  if (isBrowser) {
    smoothscroll.polyfill();
  }

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes} />
      <GlobalStyle />
      <FixedHeader
        isMusicPlaying={isMusicPlaying}
        setMusicPlaying={setMusicPlaying}
      />
      <ReactPlayer
        playing={isMusicPlaying}
        style={playerStyle}
        url={playerSources}
      />
      {children}
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
