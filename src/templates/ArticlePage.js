import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Main } from '@components/styled';
import { Breadcrumbs } from '@components';

import {
  Content, Cover, PortraitCover,
} from '@components/GenericPage/GenericPage.styled';

import {
  Container, Header, Lead, Title,
} from '@components/ArticlePage/ArticlePage.styled';
import { renderArticle } from '@utils';

const slugs = {
  equilibrium: 'Spokój i równowaga',
  relaxx: 'Strefa relaksu',
  sleeep: 'Zdrowy sen',
};

const ArticlePage = ({
  pageContext, path,
}) => (
  <Main>
    <Header>
      <Cover
        $hideOnPortrait={pageContext?.hasPortraitCover}
        image={pageContext?.cover}
      />
      {pageContext?.hasPortraitCover && <PortraitCover image={pageContext?.coverPortrait} />}
      <Container>
        <Title
          $isLight={pageContext?.isLight}
          dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.heading) }}
          isLowercase
        />
        <Breadcrumbs
          $isLight={pageContext?.isLight}
          steps={[
            {
              text: 'Psycholog radzi',
              to: '/psycholog-radzi',
            },
            {
              text: slugs[pageContext?.type],
              to: `/psycholog-radzi/${path.split('/')[2]}`,
            },
            {
              text: pageContext?.renderedTitle,
              to: null,
            },
          ]}
        />
        <Lead>{pageContext?.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        {pageContext?.sections && renderArticle(pageContext?.sections)}
      </Container>
    </Content>
  </Main>
);

export default ArticlePage;

ArticlePage.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    coverPortrait: PropTypes.shape({}),
    hasPortraitCover: PropTypes.bool,
    heading: PropTypes.string,
    isLight: PropTypes.bool,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({})),
    type: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
