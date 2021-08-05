import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // color declarations go here
    brand: '#234669',
    light: '#969696',
    manufacturer: {
      dark: '#034694',
      light: '#94BDE5',
    },
    text: '#3e3e3e',
  },
  fonts: {
    sizes: {
      /* eslint-disable sort-keys */
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
