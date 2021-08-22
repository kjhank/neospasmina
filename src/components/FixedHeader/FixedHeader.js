import React, {
  createRef, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';

import { Equalizer } from '@icons';
import {
  StyledContainer as Container, PlayButton, StyledHeader,
} from './FixedHeader.styled';
import {
  Logo, MainMenu,
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
  const locationRef = useRef({ location: null });

  useEffect(() => {
    if (!locationRef.current.location) {
      locationRef.current.location = location;
    } else if (locationRef.current.location !== location) {
      locationRef.current.location = location;
      const { scrollY } = window;

      setPageScrolled(scrollY === 0);
    }
  }, [location]);

  useEffect(() => {
    const { height: headerHeight } = headerRef?.current?.getBoundingClientRect();

    const scrollHandler = () => {
      const { scrollY } = window;

      setPageScrolled(scrollY > headerHeight);
    };

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <StyledHeader
      isPageScrolled={isPageScrolled}
      ref={headerRef}
    >
      <Container>
        <Logo title="logo neospasmina" />
        <MainMenu items={mainMenu}>
          <PlayButton
            isTranslucent={!isMusicPlaying}
            onClick={() => setMusicPlaying(previous => !previous)}
          >
            <Equalizer />
          </PlayButton>
        </MainMenu>
      </Container>
    </StyledHeader>
  );
};

FixedHeader.propTypes = {
  isMusicPlaying: PropTypes.bool.isRequired,
  isPageScrolled: PropTypes.bool.isRequired,
  location: PropTypes.shape({}).isRequired,
  setMusicPlaying: PropTypes.func.isRequired,
  setPageScrolled: PropTypes.func.isRequired,
};
