import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  Content, Cover, Header, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  CategoryLink, Item, Link, List,
} from '@components/ArticlesPage/ArticlesPage.styled';

const slugs = {
  equilibrium: 'Spokój i równowaga',
  relax: 'Strefa relaksu',
  sleep: 'Zdrowy sen',
};

const ArticlesPage = ({
  contentRef, pageContext,
}) => (
  <main>
    <Header ref={contentRef}>
      <Cover image={pageContext.cover} />
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: pageContext.heading }} />
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        {/* eslint-disable-next-line max-len */}
        {Object.keys(pageContext.articles).map(groupName => (
          <>
            {slugs[groupName]}
            <List>
              {pageContext.articles[groupName].map(article => (
                <Item>
                  {/* <Image image={article.} /> */}
                  {JSON.stringify(article.post)}
                  <Link
                    hasArrow
                    to={article.post.post_name}
                  >
                    Dowiedz się więcej
                  </Link>
                </Item>
              ))}
            </List>
            <CategoryLink to="#">
              Zobacz więcej artkułów z sekcji
              {' '}
              {slugs[groupName]}
            </CategoryLink>
          </>
        ))}
      </Container>
    </Content>
  </main>
);

export default ArticlesPage;

ArticlesPage.propTypes = {
  contentRef: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    articles: PropTypes.shape({}),
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
