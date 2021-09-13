import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledLink as Link, Navigation,
} from './FixedHeader.styled';

export const MainMenu = ({
  children, isOpen, items,
}) => (
  <Navigation isOpen={isOpen}>
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
    {children}
  </Navigation>
);

MainMenu.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

MainMenu.defaultProps = {
  children: null,
};

