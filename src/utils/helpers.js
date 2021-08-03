import React from 'react';
import { mediaQueries } from '@utils/rwd';

const isBrowser = () => (typeof window !== 'undefined');

const isMobile = () => isBrowser && window.matchMedia(mediaQueries.xs).matches;

const renderMetadata = data => data.map(({
  type, content,
}) => {
  if (type === 'title') {
    return <title>{content}</title>;
  }

  if (type === 'canonical-url') {
    return (
      <link
        href={content}
        rel="canonical"
      />
    );
  }

  return (
    <meta
      content={content}
      name={type}
    />
  );
});

export {
  isBrowser,
  isMobile,
  renderMetadata,
};
