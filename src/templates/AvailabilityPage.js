import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Typography,
} from '@components';

import {
  Content, Cover, Header, Lead, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Image,
  Link,
  List,
  ListItem,
  Section,
} from '@components/AvailabilityPage/AvailabilityPage.styled';

import { Cart } from '@icons';

const AvailabilityPage = ({ pageContext }) => (
  <main>
    <Header>
      <Cover image={pageContext.cover} />
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: pageContext.heading }} />
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        <Section>
          <Typography
            as="h2"
            size="huge"
            weight="semibold"
          >
            Apteki:
          </Typography>
          <List>
            {pageContext.pharmacies.map(({ pharmacy }) => (
              <ListItem key={pharmacy.name}>
                <Typography
                  as="p"
                  size="larger"
                  weight="light"
                >
                  {pharmacy.name}
                </Typography>
                <Link url={pharmacy.url}>
                  <Cart />
                  Kup online
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
        <Section>
          <Typography
            as="h2"
            size="huge"
            weight="semibold"
          >
            Dostępność sprawdzisz również na:
          </Typography>
          <List>
            {pageContext.availability.map(store => (
              <ListItem key={store.url}>
                <Image image={store.image} />
                <Link url={store.url}>
                  <Cart />
                  Kup online
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </Content>
  </main>
);

export default AvailabilityPage;

AvailabilityPage.propTypes = {
  pageContext: PropTypes.shape({
    availability: PropTypes.arrayOf(PropTypes.shape({})),
    cover: PropTypes.shape({}),
    heading: PropTypes.string,
    lead: PropTypes.string,
    pharmacies: PropTypes.arrayOf(PropTypes.shape({})),
    renderedTitle: PropTypes.string,
  }).isRequired,
};
