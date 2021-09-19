import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@components';
import { Arrow } from '@icons';

import {
  Link, ProductImage, ProductsList, SingleProduct, Wrapper,
} from './ProductsTeaser.styled';

export const ProductsTeaser = ({
  innerRef, noHeading, products, smallerMargin,
}) => (
  <Wrapper smallerMargin={smallerMargin}>
    {!noHeading && (
      <Typography
        as="h2"
        hasBottomMargin
        size="xxlarge"
        variant="uppercase"
        weight="semibold"
      >
        Poznaj nasze produkty:
      </Typography>
    )}
    <ProductsList ref={innerRef}>
      {products?.map(product => (
        <SingleProduct key={product?.slug}>
          <ProductImage
            image={product?.acf?.summary?.image}
            isLazy={false}
          />
          <Typography
            as="h3"
            size="larger"
            variant="uppercase"
            weight="semibold"
          >
            {product?.title?.rendered}
          </Typography>
          <Typography
            align="center"
            as="p"
            size="large"
          >
            {product?.acf?.summary?.description}
          </Typography>
          <Link
            color={product?.acf?.summary?.color}
            to={`/produkty/${product?.slug}`}
          >
            Sprawdź
            <Arrow />
          </Link>
        </SingleProduct>
      ))}
    </ProductsList>
  </Wrapper>
);

ProductsTeaser.propTypes = {
  innerRef: PropTypes.shape({}).isRequired,
  noHeading: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  smallerMargin: PropTypes.bool,
};

ProductsTeaser.defaultProps = {
  noHeading: false,
  smallerMargin: false,
};
