import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Typography,
} from '@components';

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

const ArticlesPage = ({ pageContext }) => (
  <main>
    <Header>
      <Cover image={pageContext.cover} />
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: pageContext.heading }} />
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        {Object.keys(pageContext.articles).map(groupName => (
          <section key={groupName}>
            {slugs[groupName]}
            <List>
              {pageContext.articles[groupName].map(article => (
                <Item key={JSON.stringify(article).slice(0, 92)}>
                  {/* <Image image={article.} /> */}
                  <Typography
                    weight="semibold"
                  >
                    {article.post.post_title}
                  </Typography>
                  <Typography>
                    {article.post.post_excerpt}
                    {' [...]'}
                  </Typography>
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
          </section>
        ))}
      </Container>
    </Content>
  </main>
);

export default ArticlesPage;

ArticlesPage.propTypes = {
  pageContext: PropTypes.shape({
    articles: PropTypes.shape({}),
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
