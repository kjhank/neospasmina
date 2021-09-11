import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Typography,
} from '@components';

import {
  Header, LinedHeading, Section,
} from '@components/ArticlesCategoryPage/ArticlesCategoryPage.styled';

import {
  Content, Cover, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Image, Item, Link, List,
} from '@components/ArticlesPage/ArticlesPage.styled';

const ArticlesCategoryPage = ({ pageContext }) => (
  <main>
    <Header>
      <Cover image={pageContext.cover} />
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.heading) }} />
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        <Section>
          <LinedHeading>{pageContext?.subtitle}</LinedHeading>
          <List>
            {pageContext.articles.map(({
              article, image,
            }) => (
              <Item key={JSON.stringify(article).slice(0, 92)}>
                <Image image={image} />
                <Typography
                  hasBottomMargin
                  size="large"
                  weight="semibold"
                >
                  {article?.post_title}
                </Typography>
                <Typography
                  hasBottomMargin
                  size="small"
                >
                  {article?.post_excerpt}
                  {' [...]'}
                </Typography>
                <Link
                  hasArrow
                  to={`/${pageContext?.slug}/${article?.post_name}`}
                >
                  Dowiedz się więcej
                </Link>
              </Item>
            ))}
          </List>
        </Section>
      </Container>
    </Content>
  </main>
);

export default ArticlesCategoryPage;

ArticlesCategoryPage.propTypes = {
  pageContext: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({})),
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    slug: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};
