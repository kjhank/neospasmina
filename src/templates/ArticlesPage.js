import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Typography,
} from '@components';

import { Main } from '@components/styled';

import {
  Cover, Header, Lead, PortraitCover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  CategoryLink, Content, Image, Item, Link, List, Section,
} from '@components/ArticlesPage/ArticlesPage.styled';

const categories = {
  equilibrium: 'Spokój i równowaga',
  relax: 'Strefa relaksu',
  sleep: 'Zdrowy sen',
};

const slugs = {
  equilibrium: 'spokoj-i-rownowaga',
  relax: 'strefa-relaksu',
  sleep: 'zdrowy-sen',
};

const ArticlesPage = ({ pageContext }) => (
  <Main>
    <Header>
      <Cover
        $hideOnPortrait={pageContext.hasPortraitCover}
        image={pageContext.cover}
      />
      {pageContext.hasPortraitCover && <PortraitCover image={pageContext.coverPortrait} />}
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.heading) }} />
        <Lead>{pageContext?.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        {Object.keys(pageContext?.articles).map(groupName => (
          <Section key={groupName}>
            <List>
              {pageContext?.articles[groupName].map(article => (
                <Item key={JSON.stringify(article).slice(0, 92)}>
                  <Image image={article.image} />
                  <Typography
                    as="h3"
                    hasBottomMargin
                    size="large"
                    weight="semibold"
                  >
                    {article.post.post_title}
                  </Typography>
                  <Typography
                    as="p"
                    hasBottomMargin
                    size="small"
                  >
                    {article.post.post_excerpt}
                    {' [...]'}
                  </Typography>
                  <Link
                    hasArrow
                    to={`${slugs[groupName]}/${article.post.post_name}`}
                  >
                    Dowiedz się więcej
                  </Link>
                </Item>
              ))}
            </List>
            <CategoryLink
              hasArrow
              to={slugs[groupName]}
            >
              <span>
                Zobacz więcej artkułów z sekcji
                {' '}
                <span>
                  {categories[groupName]}
                </span>
              </span>
            </CategoryLink>
          </Section>
        ))}
      </Container>
    </Content>
  </Main>
);

export default ArticlesPage;

ArticlesPage.propTypes = {
  pageContext: PropTypes.shape({
    articles: PropTypes.shape({}),
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    coverPortrait: PropTypes.shape({}),
    hasPortraitCover: PropTypes.bool,
    heading: PropTypes.string,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
