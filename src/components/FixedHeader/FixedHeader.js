import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  Burger, Close, Equalizer,
} from '@icons';
import {
  StyledContainer as Container, MenuToggle, PlayButton, StyledHeader,
} from './FixedHeader.styled';
import {
  Logo, LogoExtra, LogoNight, MainMenu,
} from '.';

import { mainMenu } from './FixedHeader.static';

export const FixedHeader = ({
  isMusicPlaying,
  isPageScrolled,
  location,
  setMusicPlaying,
  setPageScrolled,
}) => {
  const headerRef = createRef();

  const [
    isNavigationOpen,
    setNavigationOpen,
  ] = useState(false);

  useEffect(() => {
    const { height: headerHeight = 100 } = headerRef?.current?.getBoundingClientRect();

    const scrollHandler = () => {
      const { scrollY } = window;

      setPageScrolled(scrollY > headerHeight);
    };

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    setNavigationOpen(false);
  }, [location]);

  const isProducts = location.pathname.includes('/produkty/');
  const isExtra = isProducts && location.pathname.includes('/neospasmina-extra');
  const isNight = isProducts && location.pathname.includes('/neospasmina-noc');

  return (
    <StyledHeader
      isPageScrolled={isPageScrolled}
      ref={headerRef}
    >
      <Container>
        <Link to="/">
          {isExtra && <LogoExtra />}
          {isNight && <LogoNight />}
          {!isExtra && !isNight && <Logo title="logo neospasmina" />}
        </Link>
        <MainMenu
          isOpen={isNavigationOpen}
          items={mainMenu}
        >
          <PlayButton
            isTranslucent={!isMusicPlaying}
            onClick={() => setMusicPlaying(previous => !previous)}
          >
            <Equalizer />
          </PlayButton>
        </MainMenu>
        <MenuToggle
          isToggled={isNavigationOpen}
          onClick={() => setNavigationOpen(previous => !previous)}
        >
          <Burger />
          <Close />
        </MenuToggle>
      </Container>
    </StyledHeader>
  );
};

FixedHeader.propTypes = {
  isMusicPlaying: PropTypes.bool.isRequired,
  isPageScrolled: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  setMusicPlaying: PropTypes.func.isRequired,
  setPageScrolled: PropTypes.func.isRequired,
};
