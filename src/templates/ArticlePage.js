import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Breadcrumbs } from '@components';

import {
  Cover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Container, Content, Header, Lead,
} from '@components/ArticlePage/ArticlePage.styled';
import { renderArticle } from '@utils';

const slugs = {
  equilibrium: 'Spokój i równowaga',
};

const ArticlePage = ({
  pageContext, path,
}) => (
  <main>
    <Header>
      <Cover image={pageContext?.cover} />
      <Container>
        <Title
          isLight={pageContext?.isLight}
          isLowercase
          dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.heading) }}
        />
        <Breadcrumbs
          isLight={pageContext?.isLight}
          steps={[
            {
              text: 'Psycholog radzi',
              to: '/psycholog-radzi',
            },
            {
              text: slugs[pageContext.type],
              to: `/psycholog-radzi/${path.split('/')[2]}`,
            },
            {
              text: pageContext?.renderedTitle,
              to: null,
            },
          ]}
        />
        <Lead>{pageContext?.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        {pageContext?.sections && renderArticle(pageContext?.sections)}
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
    isLight: PropTypes.bool,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({})),
    type: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
