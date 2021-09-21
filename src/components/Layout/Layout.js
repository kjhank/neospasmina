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
  CookiesModal, FixedHeader, GlobalFooter,
} from '@components';

const COOKIES_LS_KEY = 'cookies-agreed';

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

  const metadata = pageContext?.metadata ?
    [
      ...pageContext?.metadata,
      canonicalUrl,
    ] :
    [canonicalUrl];

  const [
    isPageScrolled,
    setPageScrolled,
  ] = useState(false);

  const [
    isMusicPlaying,
    setMusicPlaying,
  ] = useState(false);

  const [
    isCookiesModalOpen,
    setCookiesModalOpen,
  ] = useState(false);

  const noProductsSlugs = [
    'produkty',
    // 'strona-glowna',
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

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    setCookiesModalOpen(!hasUserAgreed);
  }, []);

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes}>
        {renderMetadata(metadata)}
      </Helmet>
      <GlobalStyle shouldScroll={!isCookiesModalOpen} />
      <FixedHeader
        isMusicPlaying={isMusicPlaying}
        isPageScrolled={isPageScrolled}
        location={location}
        setMusicPlaying={setMusicPlaying}
        setPageScrolled={setPageScrolled}
      />
      <ReactPlayer
        config={{ file: { forceAudio: true } }}
        playing={isMusicPlaying}
        playsinline
        style={playerStyle}
        url={playerSources}
      />
      {/* {cloneElement(children, {
        productFilter,
        setProductFilter,
      })} */}
      {children}
      {!noProductsSlugs.includes(pageContext?.slug) && (
      <GlobalFooter
        company={pageContext?.company}
        featuredProducts={pageContext?.featuredProducts}
        hasExtraPadding={!noProductsSlugs.includes(pageContext?.slug)}
        hasHugePadding={path === '/produkty'}
        legal={pageContext?.legal?.legal}
        links={pageContext?.footerLinks}
        path={path}
        products={pageContext?.featuredProducts?.filter(({ slug }) => slug !== pageContext?.slug)}
        sil={pageContext?.legal?.sil}
        slug={pageContext?.slug}
      />
      )}
      <CookiesModal
        content={pageContext.globals.cookies}
        isOpen={isCookiesModalOpen}
        localStorageKey={COOKIES_LS_KEY}
        setOpen={setCookiesModalOpen}
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
    globals: PropTypes.shape({
      cookies: PropTypes.shape({}),
    }),
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
