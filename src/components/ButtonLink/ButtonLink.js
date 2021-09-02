import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  StyledButton as Button, StyledLink as Link,
} from './ButtonLink.styled';

export const ButtonLink = ({
  customAs, children, hasArrow, isCentered, to, ...props
}) => {
  if (customAs === 'button') {
    return (
      <Button
        $isCentered={isCentered}
        {...props}
      >
        {children}
        {hasArrow && <Arrow />}
      </Button>
    );
  }

  return (
    <Link
      $isCentered={isCentered}
      to={to}
      {...props}
    >
      {children}
      {hasArrow && <Arrow />}
    </Link>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  customAs: PropTypes.string,
  hasArrow: PropTypes.bool,
  isCentered: PropTypes.bool,
  to: PropTypes.string,
};

ButtonLink.defaultProps = {
  customAs: null,
  hasArrow: false,
  isCentered: false,
  to: null,
};

