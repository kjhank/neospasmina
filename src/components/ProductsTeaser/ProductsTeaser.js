import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Typography,
} from '@components';
import { Arrow } from '@icons';

import {
  Link, ProductsList, SingleProduct, Wrapper,
} from './ProductsTeaser.styled';

export const ProductsTeaser = ({
  products,
}) => (
  <Wrapper>
    <Container>
      <Typography
        as="h2"
        hasBottomMargin
        size="xxlarge"
        variant="uppercase"
        weight="semibold"
      >
        Poznaj nasze produkty
      </Typography>
      <ProductsList>
        {products?.map(product => (
          <SingleProduct key={product.slug}>
            <Image image={product.acf.summary.image} />
            <Typography
              as="h3"
              size="larger"
              variant="uppercase"
              weight="semibold"
            >
              {product.title.rendered}
            </Typography>
            <Typography
              align="center"
              as="p"
              size="large"
            >
              {product.acf.summary.description}
            </Typography>
            <Link
              color={product.acf.summary.color}
              to={`/produkty/${product.slug}`}
            >
              Sprawdź
              <Arrow />
            </Link>
          </SingleProduct>
        ))}
      </ProductsList>
    </Container>
  </Wrapper>
);

ProductsTeaser.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

