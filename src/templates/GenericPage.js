import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { renderMetadata } from '@utils';

const GenericPage = ({ pageContext }) => (
  <>
    <Helmet>
      {renderMetadata(pageContext.metadata)}
    </Helmet>
    <div>{pageContext.renderedTitle}</div>
  </>
);

export default GenericPage;

GenericPage.propTypes = {
  pageContext: PropTypes.shape({
    metadata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
