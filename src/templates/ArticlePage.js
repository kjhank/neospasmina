import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  Cover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Content, Header, Lead,
} from '@components/ArticlePage/ArticlePage.styled';
import { renderArticle } from '@utils';

const ArticlePage = ({
  contentRef, pageContext,
}) => (
  <main>
    <Header ref={contentRef}>
      <Cover image={pageContext.cover} />
      <Container>
        <Title
          isLowercase
          dangerouslySetInnerHTML={{ __html: pageContext.heading }}
        />
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        {pageContext.sections && renderArticle(pageContext.sections)}
      </Container>
    </Content>
  </main>
);

export default ArticlePage;

ArticlePage.propTypes = {
  contentRef: PropTypes.shape({}),
  pageContext: PropTypes.shape({
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

ArticlePage.defaultProps = {
  contentRef: null,
};
