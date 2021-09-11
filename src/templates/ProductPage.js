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
  Content,
  CTA,
  CTAButtonLink,
  CTAButtonsWrapper,
  CTAImage,
  Header,
  HeaderTextWrapper,
  Lead,
  LinksMosaic,
  Section,
  SingleTile,
  Subheading,
  TileImage,
  TileLink,
} from '@components/ProductPage/ProductPage.styled';

import { Arrow } from '@icons';

const ProductPage = ({ pageContext }) => (
  <main>
    <Header>
      <Cover
        image={pageContext?.cover}
        isLazy={false}
      />
      <Container>
        <HeaderTextWrapper>
          <Title
            color={pageContext.color}
            dangerouslySetInnerHTML={{ __html: pageContext.acf.heading }}
          />
          <Lead color={pageContext.color}>{pageContext.lead}</Lead>
        </HeaderTextWrapper>
        <CTA>
          <CTAImage
            image={pageContext.cta?.image}
            isLazy={false}
          />
          <CTAButtonsWrapper>
            <CTAButtonLink
              color={pageContext.cta.color}
              url={pageContext.cta['buy-now'].url}
              variant={pageContext.cta['buy-now'].variant}
            >
              {pageContext.cta['buy-now'].label}
            </CTAButtonLink>
            <CTAButtonLink
              color={pageContext.cta.color}
              download
              url={pageContext.cta.file.file}
              variant={pageContext.cta.file.variant}
            >
              {pageContext.cta.file.label}
            </CTAButtonLink>
          </CTAButtonsWrapper>
        </CTA>
      </Container>
    </Header>
    <Content>
      <Container>
        <Typography
          as="p"
          align="center"
          color="medGray"
          dangerouslySetInnerHTML={{ __html: pageContext.product.intro }}
          hasBottomMargin
          size="xlarge"
          weight="semibold"
        />
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
          <LinksMosaic gradient={pageContext.slug === 'neospasmina-noc' ? 'purple' : 'default'}>
            {pageContext.product.links.map(link => (
              <SingleTile key={link.name}>
                <TileImage image={link?.image} />
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
          {pageContext.product.doses.adults && (
          <>
            <Subheading color={pageContext.color}>
              <div>
                Dorośli
              </div>
            </Subheading>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: pageContext.product.doses.adults }}
              hasHighlights
              highlightColor={pageContext.product.doses['highlight-color']}
              size="larger"
            />
          </>
          )}
          {pageContext.product.doses.kids && (
          <>
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
          </>
          )}
        </Section>
        <Section>
          <LinedHeading as="h2">
            {pageContext.product.contraindications.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{
              __html: pageContext.product.contraindications.text,
            }}
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
    cta: PropTypes.shape({
      'buy-now': PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
        variant: PropTypes.string,
      }),
      color: PropTypes.string,
      file: PropTypes.shape({
        file: PropTypes.string,
        label: PropTypes.string,
        variant: PropTypes.string,
      }),
      image: PropTypes.shape({}),
    }),
    lead: PropTypes.string,
    product: PropTypes.shape({
      contraindications: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
      }),
      doses: PropTypes.shape({
        adults: PropTypes.string,
        'highlight-color': PropTypes.string,
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
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

