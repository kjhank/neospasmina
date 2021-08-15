import React from 'react';
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
  setMusicPlaying,
}) => (
  <StyledHeader>
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

FixedHeader.propTypes = {
  isMusicPlaying: PropTypes.bool.isRequired,
  setMusicPlaying: PropTypes.func.isRequired,
};
