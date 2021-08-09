import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { renderMetadata } from '@utils';

import {
  Carousel, Container, ProductsSection,
} from '@components';

const HomePage = ({ pageContext }) => (
  <>
    <Helmet>
      {renderMetadata(pageContext.metadata)}
    </Helmet>
    <main>
      <Container>
        <Carousel items={pageContext.carousel} />
      </Container>
      <ProductsSection />
    </main>
  </>
);

export default HomePage;

HomePage.propTypes = {
  pageContext: PropTypes.shape({
    carousel: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    metadata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
