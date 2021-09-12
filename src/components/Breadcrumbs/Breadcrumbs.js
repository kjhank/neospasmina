import React from 'react';
import PropTypes from 'prop-types';

import {
  Link, List, ListItem, Splitter, Wrapper,
} from './Breadcrumbs.styled';

export const Breadcrumbs = ({
  isLight, steps,
}) => (
  <Wrapper isLight={isLight}>
    <List>
      {steps.map(step => (step.to ?
        (
          <ListItem key={step.text}>
            <Link
              isLight={isLight}
              to={step.to}
            >
              {step.text}
            </Link>
            <Splitter>&gt;</Splitter>
          </ListItem>
        ) :
        (
          <ListItem key={step.text}>
            {step.text}
          </ListItem>
        )
      ))}
    </List>
  </Wrapper>
);

Breadcrumbs.propTypes = {
  isLight: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Breadcrumbs.defaultProps = {
  isLight: false,
};

