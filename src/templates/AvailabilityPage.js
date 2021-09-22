import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Typography } from '@components';
import { Main } from '@components/styled';

import {
  PortraitCover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Container,
  Content,
  Cover,
  Header,
  Image,
  Lead,
  Link,
  List,
  ListItem,
  Section,
} from '@components/AvailabilityPage/AvailabilityPage.styled';

import { Cart } from '@icons';

const AvailabilityPage = ({ pageContext }) => (
  <Main>
    <Header>
      <Cover
        $hideOnPortrait={pageContext?.hasPortraitCover}
        image={pageContext?.cover}
      />
      {pageContext?.hasPortraitCover && <PortraitCover image={pageContext?.coverPortrait} />}
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.heading) }} />
        <Lead>{pageContext?.lead}</Lead>
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
            {pageContext?.pharmacies.map(({ pharmacy }) => (
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
            {pageContext?.availability.map(store => (
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
  </Main>
);

export default AvailabilityPage;

AvailabilityPage.propTypes = {
  pageContext: PropTypes.shape({
    availability: PropTypes.arrayOf(PropTypes.shape({})),
    cover: PropTypes.shape({}),
    coverPortrait: PropTypes.shape({}),
    hasPortraitCover: PropTypes.bool,
    heading: PropTypes.string,
    lead: PropTypes.string,
    pharmacies: PropTypes.arrayOf(PropTypes.shape({})),
    renderedTitle: PropTypes.string,
  }).isRequired,
};
