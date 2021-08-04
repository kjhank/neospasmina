import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { Equalizer } from '@icons';
import {
  PlayButton, StyledHeader,
} from './FixedHeader.styled';
import { MainMenu } from '.';

import { mainMenu } from './FixedHeader.static';

export const FixedHeader = ({
  isMusicPlaying,
  setMusicPlaying,
}) => (
  <StyledHeader>
    <Container>
      <MainMenu items={mainMenu} />
      This is a fixed header.
      <PlayButton
        isTranslucent={!isMusicPlaying}
        onClick={() => setMusicPlaying(previous => !previous)}
      >
        <Equalizer />
      </PlayButton>
    </Container>
  </StyledHeader>
);

FixedHeader.propTypes = {
  isMusicPlaying: PropTypes.bool.isRequired,
  setMusicPlaying: PropTypes.func.isRequired,
};
