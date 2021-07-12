import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ pageContext }) => (
  <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
);

HomePage.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

export default HomePage;
