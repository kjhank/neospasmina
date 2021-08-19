import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  Content, Cover, Header, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

const GenericPage = ({
  contentRef, pageContext,
}) => (
  <main>
    <Header ref={contentRef}>
      <Cover image={pageContext.cover} />
      <Container>
        <Title>{pageContext.renderedTitle}</Title>
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Content>
  </main>
);

export default GenericPage;

GenericPage.propTypes = {
  contentRef: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    content: PropTypes.string,
    cover: PropTypes.shape({}),
    lead: PropTypes.string,
    renderedTitle: PropTypes.string,
  }).isRequired,
};
