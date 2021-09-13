import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import {
  graphql, useStaticQuery,
} from 'gatsby';

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
  children, location, pageContext, path,
}) => {
  const { site: { siteMetadata: { siteUrl } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl,
        }
      }
    }
  `);

  const canonicalUrl = {
    content: `${siteUrl}${path}`,
    type: 'canonicalUrl',
  };

  const metadata = pageContext?.metadata ? [
    ...pageContext?.metadata,
    canonicalUrl,
  ] : [canonicalUrl];

  const [
    isPageScrolled,
    setPageScrolled,
  ] = useState(false);

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

  useEffect(() => {
    if (isBrowser) {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes}>
        {renderMetadata(metadata)}
      </Helmet>
      <GlobalStyle />
      <FixedHeader
        isMusicPlaying={isMusicPlaying}
        isPageScrolled={isPageScrolled}
        location={location}
        setMusicPlaying={setMusicPlaying}
        setPageScrolled={setPageScrolled}
      />
      <ReactPlayer
        playing={isMusicPlaying}
        style={playerStyle}
        url={playerSources}
      />
      {/* {cloneElement(children, {
        productFilter,
        setProductFilter,
      })} */}
      {children}
      {!noProductsSlugs.includes(pageContext?.slug) && (
        <ProductsTeaser
          noHeading={location.pathname === '/produkty/'}
          products={pageContext?.featuredProducts?.filter(({ slug }) => slug !== pageContext?.slug)}
        />
      )}
      <GlobalFooter
        company={pageContext?.company}
        hasExtraPadding={!noProductsSlugs.includes(pageContext?.slug)}
        hasHugePadding={location.pathname === '/produkty'}
        legal={pageContext?.legal?.legal}
        links={pageContext?.footerLinks}
        sil={pageContext?.legal?.sil}
      />
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
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
  path: PropTypes.string.isRequired,
};

export default Layout;
