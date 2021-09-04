import React from 'react';
import PropTypes from 'prop-types';
import { sanitize } from 'dompurify';

import { Container } from '@components';

import {
  Cover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Content, Header, Lead,
} from '@components/ArticlePage/ArticlePage.styled';
import { renderArticle } from '@utils';

const ArticlePage = ({ pageContext }) => (
  <main>
    <Header>
      <Cover image={pageContext.cover} />
      <Container>
        <Title
          isLowercase
          dangerouslySetInnerHTML={{ __html: sanitize(pageContext.heading) }}
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
  pageContext: PropTypes.shape({
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};
