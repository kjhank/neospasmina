import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { Arrow } from '@icons';
import { LinedHeading } from '@components/HomePage/HomePage.styled';
import {
  StyledLink as ButtonLink, ProductsImage as Image, LinksWrapper, Section,
} from './ProductsSection.styled';

export const ProductsSection = ({ data }) => (
  <Section>
    <Container>
      <LinedHeading>{data.title}</LinedHeading>
      <Image
        image={data.image}
        isLazy={false}
      />
      <LinksWrapper>
        {data.links.map(({
          label, url,
        }) => (
          <ButtonLink
            key={label}
            to={url}
          >
            {label}
            <Arrow />
          </ButtonLink>
        ))}
      </LinksWrapper>
    </Container>
  </Section>
);

ProductsSection.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({}),
    links: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
  }).isRequired,
};
