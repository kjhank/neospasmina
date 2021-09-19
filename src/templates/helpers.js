import React from 'react';
import { Link } from 'gatsby';
import sanitize from 'sanitize-html';
import styled from 'styled-components';

import { Typography } from '@components';

import { mediaQueries } from '@utils/rwd';

const List = styled.ul`
  padding-left: 0.5em;
  list-style-type: none;

  @media ${mediaQueries.s} {
    .map-link {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
    }
  }
`;

export const renderSitemap = links => links.map(group => (
  <Typography
    hasBottomMargin
    key={group.heading}
  >
    <Typography
      as="h3"
      size="larger"
      variant="uppercase"
      weight="semibold"
    >
      {group.heading}
    </Typography>
    <List>
      {group.items.map(link => (
        <li key={link.slug}>
          <Link to={link.slug}>
            <Typography
              as="span"
              className="map-link"
              dangerouslySetInnerHTML={{ __html: sanitize(link.title) }}
              size="large"
              variant={group.heading.toLowerCase() === 'produkty' ? 'uppercase' : 'none'}
              weight="normal"
            />
          </Link>
        </li>
      ))}
    </List>
  </Typography>
));
