import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonLink, Container,
} from '@components';
import { LinedHeading } from '@components/styled';
import { Arrow } from '@icons';
import {
  ArticleImage,
  ArticlesList,
  Excerpt,
  Section,
  SingleArticle,
  SingleArticleTitle,
  Subheading,
} from './HomePage.styled';

export const ArticlesSection = ({ data }) => (
  <Section hasGradient>
    <Container>
      <LinedHeading>
        {data.title}
      </LinedHeading>
      <Subheading>
        {data.subtitle}
      </Subheading>
      <ArticlesList>
        {data.articles.map(({
          article, image, url,
        }) => (
          <SingleArticle key={article.post_title}>
            <ArticleImage image={image} />
            <SingleArticleTitle>
              {article.post_title}
            </SingleArticleTitle>
            <Excerpt>
              {article.post_excerpt}
              {' [...]'}
            </Excerpt>
            <ButtonLink to={url}>
              Dowiedz się więcej
              <Arrow />
            </ButtonLink>
          </SingleArticle>
        ))}
      </ArticlesList>
    </Container>
  </Section>
);

ArticlesSection.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({})),
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

