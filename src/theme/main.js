import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';

const theme = {
  colors: {
    brand: '#234669',
    light: '#969696',
    manufacturer: {
      dark: '#034694',
      light: '#94BDE5',
    },
    medGray: '#767676',
    sectionGradient: {
      from: '#f0f5d6',
      to: '#d3e099',
    },
    text: '#3e3e3e',
  },
  fonts: {
    sizes: {
      /* eslint-disable sort-keys */
      tiny: '10px',
      xxsmall: '12px',
      xsmall: '14px',
      small: '16px',
      medium: '18px',
      large: '20px',
      xlarge: '30px',
      xxlarge: '36px',
      huge: '42px',
      hero: '50px',
      /* eslint-enable sort-keys */
    },
    types: {
      alt: 'Myriad Pro',
      main: 'Fira Sans',
    },
  },
  getGradient: () => css`
    background-image: radial-gradient(${theme.colors.sectionGradient.from}, ${theme.colors.sectionGradient.to});
  `,
  getTransitions: properties => properties.map(property => `${property} ${theme.transitions.duration}`).join(', '),
  transitions: {
    duration: '0.4s',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
