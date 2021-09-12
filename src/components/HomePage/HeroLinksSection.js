import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { LongArrow } from '@icons';
import {
  LinksMosaic, MosaicImage, MosaicLink, MosaicLinkTitle, Section,
} from './HomePage.styled';

const renderLinkTitle = title => {
  const titleArray = title.split(' ');
  const lastWord = titleArray.pop();
  const lastSpan = (
    <span>
      {lastWord}
      {' '}
      <LongArrow />
    </span>
  );

  return (
    <span>
      {titleArray.join(' ')}
      {' '}
      {lastSpan}
    </span>
  );
};

export const HeroLinksSection = ({ data }) => (
  <Section>
    <Container>
      <LinksMosaic>
        {data.map(({
          image, post,
        }) => (
          <MosaicLink
            key={post.url}
            to={post.url}
          >
            <MosaicImage>
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
            </MosaicImage>
            <MosaicLinkTitle isWider={post.isWider}>
              {renderLinkTitle(post.label)}
            </MosaicLinkTitle>
          </MosaicLink>
        ))}
      </LinksMosaic>
    </Container>
  </Section>
);

HeroLinksSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

