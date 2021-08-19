import React from 'react';

import { mediaQueries } from '@utils/rwd';

import {
  ArticleImage,
  Footnotes,
  Lead,
  SectionHeading,
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
  console.log(section);

  const {
    image,
    text,
    'text-image': textImage,
    type,
  } = section;

  const [variant] = type.split(':')

  if (type.includes('textLeft') || type.includes('textRight')) {

    return (
      <Section variant={variant}>
        <Typography
          dangerouslySetInnerHTML={{__html: textImage.text}}
        />
        <ArticleImage image={textImage.image} />
      </Section>
    );
  }

  if (variant === 'fullText') {
    return (
      <Section
        dangerouslySetInnerHTML={{ __html: text }}
        variant={variant}
      />
    );
  }

  if (variant === 'footnotes') {
    return (
      <Section
        dangerouslySetInnerHTML={{ __html: text }}
        variant={variant}
      />
    );
  }

  return null;
})