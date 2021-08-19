import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { renderMetadata } from '@utils';

import {
  Carousel, Container, ProductsSection,
} from '@components';
import { ArticlesSection } from '@components/HomePage/ArticlesSection';
import { HeroLinksSection } from '@components/HomePage/HeroLinksSection';

const HomePage = ({
  contentRef, pageContext,
}) => (
  <>
    <Helmet>
      {renderMetadata(pageContext.metadata)}
    </Helmet>
    <main>
      <Container ref={contentRef}>
        <Carousel
          items={pageContext.carousel}
        />
      </Container>
      <ProductsSection data={pageContext.products} />
      <ArticlesSection
        data={pageContext.articles}
      />
      <HeroLinksSection data={pageContext.links} />
    </main>
  </>
);

export default HomePage;

HomePage.propTypes = {
  contentRef: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    articles: PropTypes.shape({}),
    carousel: PropTypes.arrayOf(PropTypes.shape({})),
    links: PropTypes.arrayOf(PropTypes.shape({})),
    metadata: PropTypes.arrayOf(PropTypes.shape({})),
    products: PropTypes.shape({}),
    renderedTitle: PropTypes.string,
  }).isRequired,
};
