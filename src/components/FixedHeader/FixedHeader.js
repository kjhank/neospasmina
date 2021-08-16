import React, {
  createRef, useEffect,
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
  contentRef,
  isMusicPlaying,
  isPageScrolled,
  setMusicPlaying,
  setPageScrolled,
}) => {
  const headerRef = createRef();

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([
      {
        intersectionRatio,
      },
    ]) => {
      if (intersectionRatio < 0.9) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    }, {
      // rootMargin: '200px',
      threshold: [
        0.1,
        0.2,
        0.3,
        0.4,
        0.5,
        0.6,
        0.7,
        0.8,
        0.9,
      ],
    });

    scrollObserver.observe(contentRef.current);
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
  contentRef: PropTypes.shape({
    current: PropTypes.node,
  }).isRequired,
  isMusicPlaying: PropTypes.bool.isRequired,
  isPageScrolled: PropTypes.bool.isRequired,
  setMusicPlaying: PropTypes.func.isRequired,
  setPageScrolled: PropTypes.func.isRequired,
};
