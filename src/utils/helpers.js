import React from 'react';

import { mediaQueries } from '@utils/rwd';

import {
  ArticleImage,
  Section,
} from '@components/ArticlePage/ArticlePage.styled';

import { Typography } from '@components';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const isMobile = () => isBrowser && window.matchMedia(mediaQueries.xs).matches;

export const renderMetadata = data => data?.map(({
  type, content,
}) => {
  if (type === 'title') {
    return <title key={content}>{content ? `${content} - Neospasmina` : 'Neospasmina'}</title>;
  }

  if (type === 'canonical-url') {
    return (
      <link
        href={content}
        key={content}
        rel="canonical"
      />
    );
  }

  return (
    <meta
      content={content}
      key={content}
      name={type}
    />
  );
});

export const renderArticle = sections => sections.map(({ section }) => {
  const {
    // image,
    text,
    'text-image': textImage,
    'two-cols': twoCols,
    type,
  } = section;

  const [variant] = type.split(':');
  const key = JSON.stringify(section).slice(0, 92);

  if (type.includes('textLeft') || type.includes('textRight')) {
    return (
      <Section
        key={key}
        variant={variant}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: textImage.text }}
        />
        <ArticleImage image={textImage.image} />
      </Section>
    );
  }

  if (variant === 'fullText') {
    return (
      <Section
        dangerouslySetInnerHTML={{ __html: text }}
        key={key}
        variant={variant}
      />
    );
  }

  if (variant === 'twoCols') {
    return (
      <Section
        key={key}
        variant={variant}
      >
        {JSON.stringify(twoCols)}
        foo
      </Section>
    );
  }

  if (variant === 'footnotes') {
    return (
      <Section
        as="footer"
        dangerouslySetInnerHTML={{ __html: text }}
        key={key}
        variant={variant}
      />
    );
  }

  return null;
});
