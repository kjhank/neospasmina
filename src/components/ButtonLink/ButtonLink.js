import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import { StyledLink as Link } from './ButtonLink.styled';

export const ButtonLink = ({
  children, hasArrow, isCentered, to,
}) => (
  <Link
    isCentered={isCentered}
    to={to}
  >
    {children}
    {hasArrow && <Arrow />}
  </Link>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  hasArrow: PropTypes.bool,
  isCentered: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  hasArrow: false,
  isCentered: false,
};

