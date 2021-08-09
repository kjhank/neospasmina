import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { Arrow } from '@icons';
import {
  StyledLink as ButtonLink, Image, LinksWrapper, Section,
} from './ProductsSection.styled';

export const ProductsSection = ({ image }) => (
  <Section>
    <Container>
      <Image>
        <source
          srcSet={`${image?.url.split('.').slice(0, -1)
            .join('.')}.webp`}
          type="image/webp"
        />
        <source
          srcSet={image?.url}
          type={`image/${image?.subtype}`}
        />
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          alt={image?.alt}
          src={image?.url}
        />
      </Image>
      <LinksWrapper>
        <ButtonLink
          to="/produkty?type=na-uspokojenie"
        >
          Na uspokojenie
          <Arrow />
        </ButtonLink>
        <ButtonLink
          to="/produkty?type=na-sen"
        >
          Na sen
          <Arrow />
        </ButtonLink>
      </LinksWrapper>
    </Container>
  </Section>
);

ProductsSection.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    subtype: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
