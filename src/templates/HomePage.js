import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { renderMetadata } from '@utils';

import {
  Carousel, Container, ProductsSection,
} from '@components';
import { ArticlesSection } from '@components/HomePage/ArticlesSection';
import { HeroLinksSection } from '@components/HomePage/HeroLinksSection';

const HomePage = ({ pageContext }) => (
  <>
    <Helmet>
      {renderMetadata(pageContext.metadata)}
    </Helmet>
    <main>
      <Container>
        <Carousel
          items={pageContext.carousel}
        />
      </Container>
      <ProductsSection data={pageContext.products} />
      <ArticlesSection data={pageContext.articles} />
      <HeroLinksSection data={pageContext.links} />
    </main>
  </>
);

export default HomePage;

HomePage.propTypes = {
  pageContext: PropTypes.shape({
    articles: PropTypes.shape({}),
    carousel: PropTypes.arrayOf(PropTypes.shape({})),
    links: PropTypes.arrayOf(PropTypes.shape({})),
    metadata: PropTypes.arrayOf(PropTypes.shape({})),
    products: PropTypes.shape({}),
    renderedTitle: PropTypes.string,
  }).isRequired,
};
