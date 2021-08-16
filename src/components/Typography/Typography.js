import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
  margin-bottom: ${({ hasBottomMargin }) => hasBottomMargin && '1em'};
  color: ${({
    color, theme,
  }) => theme.colors[color] || theme.colors.text};
  font-weight: ${({
    theme, weight,
  }) => theme.fonts.weights[weight]};
  font-size: ${({
    size, theme,
  }) => theme.fonts.sizes[size]};
  text-align: ${({ align }) => align};
  text-transform: ${({ variant }) => variant?.includes('uppercase') && 'uppercase'};

  b, strong {
    font-weight: bold;
  }
  ${({
    hasHighlights, highlightColor, theme,
  }) => hasHighlights && css`
    b,
    strong {
      display: block;
      margin: 1em 0;
      background-color: ${highlightColor};
      color: #fff;
      border-radius: ${theme.borderRadii.full};
      padding: 1vw 15%;
      font-weight: bold;
    }
  `};
`;

export const Typography = ({
  align,
  as,
  children,
  color,
  dangerouslySetInnerHTML,
  hasBottomMargin,
  hasHighlights,
  highlightColor,
  size,
  variant,
  weight,
}) => (
  <Text
    align={align}
    as={as}
    color={color}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    hasBottomMargin={hasBottomMargin}
    hasHighlights={hasHighlights}
    highlightColor={highlightColor}
    size={size}
    variant={variant}
    weight={weight}
  >
    {children}
  </Text>
);

Typography.propTypes = {
  align: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.shape({}),
  hasBottomMargin: PropTypes.bool,
  hasHighlights: PropTypes.bool,
  highlightColor: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  weight: PropTypes.string,
};

Typography.defaultProps = {
  align: null,
  as: null,
  children: null,
  color: null,
  dangerouslySetInnerHTML: null,
  hasBottomMargin: null,
  hasHighlights: false,
  highlightColor: null,
  size: null,
  variant: null,
  weight: null,
};
