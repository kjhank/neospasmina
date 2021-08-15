import React from 'react';
import PropTypes from 'prop-types';
import { lighten } from 'polished';

import {
  Container, Typography,
} from '@components';

import { LinedHeading } from '@components/styled';

import {
  Cover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Content, Header, Lead, LinksMosaic, Section, SingleTile, Subheading, TileImage, TileLink,
} from '@components/ProductPage/ProductPage.styled';

import { Arrow } from '@icons';

const ProductPage = ({ pageContext }) => (
  <main>
    <Header>
      <Cover image={pageContext.cover} />
      <Container>
        <Title
          color={pageContext.color}
          dangerouslySetInnerHTML={{ __html: pageContext.acf.heading }}
        />
        <Lead>{pageContext.lead}</Lead>
      </Container>
    </Header>
    <Content>
      <Container>
        <Typography
          as="p"
          align="center"
          color="medGray"
          hasBottomMargin
          size="xlarge"
          weight="semibold"
        >
          {pageContext.product.intro}
        </Typography>
        <Section>
          <LinedHeading as="h2">
            {pageContext.product.indications.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: pageContext.product.indications.text }}
            size="larger"
          />
        </Section>
        <Section>
          <LinedHeading as="h2">
            {pageContext.product.ingredients.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: pageContext.product.ingredients.text }}
            size="larger"
          />
          <LinksMosaic>
            {pageContext.product.links.map(link => (
              <SingleTile key={link.name}>
                <TileImage image={link.image} />
                <Typography
                  size="large"
                  weight="bold"
                >
                  {link.name}
                </Typography>
                <Typography
                  size="xsmall"
                >
                  {link.description}
                </Typography>
                <TileLink
                  to={link.url}
                  color={pageContext.color}
                >
                  Dowiedz się więcej
                  <Arrow />
                </TileLink>
              </SingleTile>
            ))}
          </LinksMosaic>
        </Section>
        <Section>
          <LinedHeading as="h2">
            {pageContext.product.form.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: pageContext.product.form.text }}
            size="larger"
          />
        </Section>
        <Section>
          <LinedHeading as="h2">
            Dawkowanie
          </LinedHeading>
          <Subheading color={pageContext.color}>
            <div>
              Dorośli
            </div>
          </Subheading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: pageContext.product.doses.adults }}
            hasHighlights
            highlightColor={lighten(0.4, pageContext.color)}
            size="larger"
          />
          <Subheading color={pageContext.color}>
            <div>
              Dzieci i młodzież
            </div>
          </Subheading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: pageContext.product.doses.kids }}
            hasHighlights
            highlightColor={lighten(0.4, pageContext.color)}
            size="larger"
          />
        </Section>
        <Section>
          <LinedHeading as="h2">
            {pageContext.product.contraindications.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: pageContext.product.contraindications.text }}
            size="larger"
          />
        </Section>
      </Container>
    </Content>
  </main>
);

export default ProductPage;

ProductPage.propTypes = {
  pageContext: PropTypes.shape({
    acf: PropTypes.shape({
      heading: PropTypes.string,
    }),
    color: PropTypes.string,
    cover: PropTypes.shape({}),
    lead: PropTypes.string,
    product: PropTypes.shape({
      contraindications: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
      }),
      doses: PropTypes.shape({
        adults: PropTypes.string,
        kids: PropTypes.string,
      }),
      form: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
      }),
      indications: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
      }),
      ingredients: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
      }),
      intro: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    title: PropTypes.string,
  }).isRequired,
};

