import React, {
  useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import {
  Container, ProductsTeaser,
} from '@components';

import {
  Cover, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Content, FilterButton, FiltersWrapper, Header,
} from '@components/ProductsPage/ProductsPage.styled';

const ProductsPage = ({
  location, pageContext,
}) => {
  const params = useMemo(() => new URLSearchParams(location.search), [location]);
  const { featuredProducts } = pageContext;

  const [
    productFilter,
    setProductFilter,
  ] = useState(params.get('type') || '');

  // const products = featuredProducts.reduce((acc, product) => {
  //   const { type } = product;

  //   return {
  //     ...acc,
  //     [type]: [
  //       ...(acc[type] || []),
  //       product,
  //     ],
  //   };
  // }, {});

  const [
    products,
    setProducts,
  ] = useState(featuredProducts);

  useEffect(() => {
    setProductFilter(params.get('type') || '');
  }, [
    location,
    params,
  ]);

  useEffect(() => {
    navigate(productFilter ? `/produkty?type=${productFilter}` : '/produkty', { replace: true });

    setProducts(productFilter ?
      featuredProducts.filter(product => product.acf.product.type === productFilter) :
      featuredProducts);
  }, [productFilter]);

  const filterButtons = [
    {
      slug: 'na-uspokojenie',
      text: 'Na uspokojenie',
    },
    {
      slug: 'na-sen',
      text: 'Na sen',
    },
    {
      slug: 'all',
      text: 'Wszystkie produkty',
    },
  ];

  const handleFilter = slug => setProductFilter(slug === 'all' ? '' : slug);

  return (
    <main>
      <Header>
        <Cover image={pageContext.cover} />
        <Container>
          <Title dangerouslySetInnerHTML={{ __html: pageContext.heading }} />
          <Lead>{pageContext.lead}</Lead>
          <FiltersWrapper>
            {filterButtons.map(button => (
              <FilterButton
                key={button.slug}
                onClick={() => handleFilter(button.slug)}
              >
                {button.text}
              </FilterButton>
            ))}
          </FiltersWrapper>
        </Container>
      </Header>
      <Content>
        <ProductsTeaser
          isPulledUp
          noHeading
          products={products}
        />
      </Content>
    </main>
  );
};

export default ProductsPage;

ProductsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  pageContext: PropTypes.shape({
    cover: PropTypes.shape({}).isRequired,
    featuredProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    heading: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
  }).isRequired,
};
