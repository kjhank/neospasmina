import React from 'react';
import sanitize from 'sanitize-html';

import { mediaQueries } from '@utils/rwd';

import {
  ArticleImage,
  Section,
} from '@components/ArticlePage/ArticlePage.styled';

import { Typography } from '@components';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const isMobile = !!(isBrowser && window.matchMedia(mediaQueries.xs).matches);

export const renderMetadata = data => data?.map(({
  type, content,
}) => {
  if (type === 'title') {
    return <title key={content}>{content ? `${content} - Neospasmina` : 'Neospasmina'}</title>;
  }

  if (type === 'canonicalUrl') {
    return (
      [
        <link
          href={content}
          key={content}
          rel="canonical"
        />,
        <meta
          content={content}
          key={content}
          property="og:url"
        />,
      ]
    );
  }

  if (type === 'canonical-url') {
    return null;
  }

  if (content) {
    return (
      <meta
        content={content}
        key={content}
        name={type}
      />
    );
  }

  return null;
});

export const renderArticle = sections => sections.map(({ section }) => {
  const {
    gradient_properties: gradientProperties,
    has_gradient: hasGradient,
    image,
    text,
    'text-image': textImage,
    'two-cols': twoCols,
    type,
  } = section;

  const [variant] = type.split(':');
  const key = JSON.stringify(section).slice(0, 115);
  const gradient = hasGradient ? gradientProperties : false;

  if (type.includes('textLeft') || type.includes('textRight')) {
    return (
      <Section
        gradient={gradient}
        key={key}
        variant={variant}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: sanitize(textImage.text) }}
        />
        <ArticleImage image={textImage.image} />
      </Section>
    );
  }

  if (variant === 'fullText') {
    return (
      <Section
        dangerouslySetInnerHTML={{ __html: sanitize(text) }}
        gradient={gradient}
        key={key}
        variant={variant}
      />
    );
  }

  if (variant === 'twoColText') {
    return (
      <Section
        gradient={gradient}
        key={key}
        variant={variant}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: sanitize(twoCols.left) }}
        />
        <Typography
          dangerouslySetInnerHTML={{ __html: sanitize(twoCols.right) }}
        />
      </Section>
    );
  }

  if (variant === 'footnotes') {
    return (
      <Section
        as="footer"
        dangerouslySetInnerHTML={{ __html: sanitize(text) }}
        key={key}
        variant={variant}
      />
    );
  }

  if (variant === 'fullImage') {
    return (
      <ArticleImage
        hasMargin
        image={image}
      />
    );
  }

  return null;
});
