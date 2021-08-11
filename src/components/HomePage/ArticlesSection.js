import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonLink, Container,
} from '@components';
import { Arrow } from '@icons';
import {
  ArticleImage, ArticlesList, Excerpt, Section, SingleArticle, SingleArticleTitle, Title,
} from './HomePage.styled';

export const ArticlesSection = ({ data }) => (
  <Section>
    <Container>
      <Title>{data.title}</Title>
      <ArticlesList>
        {data.articles.map(({
          article, image,
        }) => (
          <SingleArticle key={article.post_title}>
            <ArticleImage>
              <source
                srcSet={`${image.url.split('.').slice(0, -1)
                  .join('.')}.webp`}
                type="image/webp"
              />
              <source
                srcSet={image.url}
                type={image.mime_type}
              />
              <img
                alt={image.alt}
                src={image.url}
              />
            </ArticleImage>
            <SingleArticleTitle>
              {article.post_title}
            </SingleArticleTitle>
            <Excerpt>
              {article.post_excerpt}
              {' [...]'}
            </Excerpt>
            <ButtonLink to={article.post_name}>
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
    title: PropTypes.string,
  }).isRequired,
};

