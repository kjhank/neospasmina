import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Content, Cover, Header, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

const GenericPage = ({ pageContext }) => (
  <main>
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
      <Container dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.content) }} />
    </Content>
  </main>
);

export default GenericPage;

GenericPage.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
