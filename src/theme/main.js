import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // color declarations go here
    brand: '#234669',
  },
  fonts: {
    sizes: {
      small: '16px',
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
