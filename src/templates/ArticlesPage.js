import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Typography,
} from '@components';

import {
  Content, Cover, Header, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  CategoryLink, Image, Item, Link, List, Section,
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
          <Section key={groupName}>
            <List>
              {pageContext.articles[groupName].map(article => (
                <Item key={JSON.stringify(article).slice(0, 92)}>
                  <Image image={article.image} />
                  <Typography
                    hasBottomMargin
                    size="large"
                    weight="semibold"
                  >
                    {article.post.post_title}
                  </Typography>
                  <Typography
                    hasBottomMargin
                    size="small"
                  >
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
            <CategoryLink
              hasArrow
              to="#"
            >
              <span>
                Zobacz więcej artkułów z sekcji
                {' '}
                <span>
                  {slugs[groupName]}
                </span>
              </span>
            </CategoryLink>
          </Section>
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