import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';

const theme = {
  borderRadii: {
    default: '8px',
    double: '16px',
    full: '999px',
    triple: '24px',
  },
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
    shadow: '#231f20',
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
      larger: '26px',
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
    weights: {
      /* eslint-disable sort-keys */
      light: 300,
      normal: 400,
      semibold: 500,
      bold: 600,
      /* eslint-enable sort-keys */
    },
  },
  getGradient: (from, to) => css`
    background-image: radial-gradient(${from || theme.colors.sectionGradient.from}, ${to || theme.colors.sectionGradient.to});
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
