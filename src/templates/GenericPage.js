import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Content, Cover, Header, Lead, PortraitCover, Title,
} from '@components/GenericPage/GenericPage.styled';

import { Main } from '@components/styled';
import { renderSitemap } from './helpers';

const GenericPage = ({
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
          dangerouslySetInnerHTML={{
            __html: pageContext?.heading || pageContext?.renderedTitle,
          }}
        />
        <Lead>{pageContext?.lead}</Lead>
      </Container>
    </Header>
    <Content>
      {path === '/mapa-strony' ?
        (
          <Container>
            {pageContext?.footerLinks && renderSitemap(pageContext?.footerLinks)}
          </Container>
        ) :
        (
          <Container dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.content) }} />)}
    </Content>
  </Main>
);

export default GenericPage;

GenericPage.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    coverPortrait: PropTypes.shape({}),
    footerLinks: PropTypes.arrayOf(PropTypes.shape({})),
    hasPortraitCover: PropTypes.bool,
    heading: PropTypes.string,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
