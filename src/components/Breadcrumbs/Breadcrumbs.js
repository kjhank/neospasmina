import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Link, List, ListItem, Splitter, Wrapper,
} from './Breadcrumbs.styled';

export const Breadcrumbs = ({
  $isLight, steps,
}) => (
  <Wrapper $isLight={$isLight}>
    <List>
      {steps.map(step => (step.to ?
        (
          <ListItem key={step.text}>
            <Link
              $isLight={$isLight}
              dangerouslySetInnerHTML={{ __html: sanitize(step.text) }}
              to={step.to}
            />
            <Splitter>&gt;</Splitter>
          </ListItem>
        ) :
        (
          <ListItem
            dangerouslySetInnerHTML={{ __html: sanitize(step.text) }}
            key={step.text}
          />
        )
      ))}
    </List>
  </Wrapper>
);

Breadcrumbs.propTypes = {
  $isLight: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Breadcrumbs.defaultProps = {
  $isLight: false,
};

