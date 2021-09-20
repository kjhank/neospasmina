import React, {
  createRef, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import sanitize from 'sanitize-html';

import {
  Container, GlobalFooter,
} from '@components';

import { Main } from '@components/styled';

import {
  Cover, Lead, PortraitCover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  FilterButton, FiltersWrapper, Header,
} from '@components/ProductsPage/ProductsPage.styled';
import { isMobile } from '@utils/helpers';

const ProductsPage = ({
  location, pageContext, path,
}) => {
  const params = useMemo(() => new URLSearchParams(location.search), [location]);
  const productsRef = createRef();

  const { featuredProducts } = pageContext;

  const [
    productFilter,
    setProductFilter,
  ] = useState(params.get('type') || '');

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

    if (isMobile) {
      const { current: listNode } = productsRef;

      const { top: elementOffset } = listNode.getBoundingClientRect();

      const scrollConfig = {
        behavior: 'smooth',
        top: elementOffset - 60,
      };

      window.scrollTo(scrollConfig);
    }
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
    <>
      <Main>
        <Header>
          <Cover
            $hideOnPortrait={pageContext.hasPortraitCover}
            image={pageContext.cover}
          />
          {pageContext.hasPortraitCover && <PortraitCover image={pageContext.coverPortrait} />}
          <Container>
            <Title dangerouslySetInnerHTML={{ __html: sanitize(pageContext.heading) }} />
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
      </Main>
      <GlobalFooter
        company={pageContext?.company}
        featuredProducts={products}
        legal={pageContext?.legal?.legal}
        links={pageContext?.footerLinks}
        path={path}
        products={pageContext?.featuredProducts?.filter(({ slug }) => slug !== pageContext?.slug)}
        productsRef={productsRef}
        sil={pageContext?.legal?.sil}
        slug={pageContext?.slug}
      />
    </>
  );
};

export default ProductsPage;

ProductsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  pageContext: PropTypes.shape({
    company: PropTypes.shape({}),
    cover: PropTypes.shape({}),
    coverPortrait: PropTypes.shape({}),
    featuredProducts: PropTypes.arrayOf(PropTypes.shape({})),
    footerLinks: PropTypes.arrayOf(PropTypes.shape({})),
    hasPortraitCover: PropTypes.bool,
    heading: PropTypes.string,
    lead: PropTypes.string,
    legal: PropTypes.shape({
      legal: PropTypes.string,
      sil: PropTypes.string,
    }),
    slug: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
