import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const ButtonLink = ({
  text, to,
}) => (
  <Link to={to}>
    {text}
  </Link>
);

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

