import React, { useState } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

import '../../../static/fonts/fonts.css';
import {
  GlobalStyle,
  isBrowser,
  renderMetadata,
} from '@utils';
import { Theme } from '@theme/main';

import {
  FixedHeader, GlobalFooter, ProductsTeaser,
} from '@components';

const Layout = ({
  children, pageContext,
}) => {
  const [
    isMusicPlaying,
    setMusicPlaying,
  ] = useState(false);

  const noProductsSlugs = [
    'produkty',
    'strona-glowna',
  ];

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

  if (isBrowser()) {
    smoothscroll.polyfill();
  }

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes}>
        {renderMetadata(pageContext.metadata)}
      </Helmet>
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
      {!noProductsSlugs.includes(pageContext.slug) && (
        <ProductsTeaser
          products={pageContext.featuredProducts.filter(({ slug }) => slug !== pageContext.slug)}
        />
      )}
      <GlobalFooter
        company={pageContext?.company}
        hasExtraPadding={!noProductsSlugs.includes(pageContext.slug)}
        legal={pageContext?.legal?.legal}
        links={pageContext?.footerLinks}
        sil={pageContext?.legal?.sil}
      />
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    company: PropTypes.shape({}),
    featuredProducts: PropTypes.arrayOf(PropTypes.shape({})),
    footerLinks: PropTypes.arrayOf(PropTypes.shape({})),
    legal: PropTypes.shape({
      legal: PropTypes.string,
      sil: PropTypes.string,
    }),
    metadata: PropTypes.arrayOf(PropTypes.shape({})),
    slug: PropTypes.string,
  }).isRequired,
};

export default Layout;
