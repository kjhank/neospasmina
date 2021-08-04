import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledLink as Link, Navigation,
} from './FixedHeader.styled';

export const MainMenu = ({ items }) => (
  <Navigation>
    {items.map(({
      content, to,
    }) => (
      <Link
        key={to}
        to={to}
      >
        {content}
      </Link>
    ))}
  </Navigation>
);

MainMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

