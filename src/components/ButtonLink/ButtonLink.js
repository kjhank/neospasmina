import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink as Link } from './ButtonLink.styled';

export const ButtonLink = ({
  children, to,
}) => (
  <Link to={to}>
    {children}
  </Link>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

