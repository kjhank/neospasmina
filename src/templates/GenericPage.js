import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Content, Cover, Header, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

import { Main } from '@components/styled';
import { renderSitemap } from './helpers';

const GenericPage = ({
  pageContext, path,
}) => (
  <Main>
    <Header>
      <Cover image={pageContext?.cover} />
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
            {renderSitemap(pageContext.footerLinks)}
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
    footerLinks: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
