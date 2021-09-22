import React from 'react';
import PropTypes from 'prop-types';
import { lighten } from 'polished';
import sanitize from 'sanitize-html';

import {
  Container, Typography,
} from '@components';

import {
  LinedHeading, Main,
} from '@components/styled';

import {
  Cover, PortraitCover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  Content,
  CTA,
  CTAButtonLink,
  CTAButtonsWrapper,
  CTAImage,
  CTALink,
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
  <Main>
    <Header>
      <Cover
        $hideOnPortrait={pageContext?.hasPortraitCover}
        image={pageContext?.cover}
        isLazy={false}
      />
      {pageContext?.hasPortraitCover && (
      <PortraitCover
        image={pageContext?.coverPortrait}
        isLazy={false}
      />
      )}
      <Container>
        <HeaderTextWrapper>
          <Title
            color={pageContext?.color}
            dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.acf.heading) }}
          />
          <Lead color={pageContext?.color}>{pageContext?.lead}</Lead>
        </HeaderTextWrapper>
        <CTA>
          <CTAImage
            image={pageContext?.cta?.image}
            isLazy={false}
          />
          <CTAButtonsWrapper>
            <CTALink
              color={pageContext?.cta.color}
              to={pageContext?.cta['buy-now'].url.url}
              variant={pageContext?.cta['buy-now'].variant}
            >
              {pageContext?.cta['buy-now'].label}
            </CTALink>
            <CTAButtonLink
              color={pageContext?.cta.color}
              download
              rel={null}
              target={null}
              url={pageContext?.cta.file.file}
              variant={pageContext?.cta.file.variant}
            >
              {pageContext?.cta.file.label}
            </CTAButtonLink>
          </CTAButtonsWrapper>
        </CTA>
      </Container>
    </Header>
    <Content>
      <Container>
        <Typography
          align="center"
          as="p"
          color="medGray"
          dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.product.intro) }}
          hasBottomMargin
          size="xlarge"
          weight="semibold"
        />
        <Section>
          <LinedHeading as="h2">
            {pageContext?.product.indications.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.product.indications.text) }}
            size="larger"
          />
        </Section>
        <Section>
          <LinedHeading as="h2">
            {pageContext?.product.ingredients.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.product.ingredients.text) }}
            size="larger"
          />
          <LinksMosaic gradient={pageContext?.slug === 'neospasmina-noc' ? 'purple' : 'default'}>
            {pageContext?.product.links.map(link => (
              <SingleTile key={link?.name}>
                <TileImage image={link?.image} />
                <Typography
                  as="h3"
                  size="large"
                  weight="bold"
                >
                  {link?.name}
                </Typography>
                <Typography
                  as="p"
                  size="xsmall"
                >
                  {link?.description}
                </Typography>
                <TileLink
                  color={pageContext?.color}
                  to={link?.url}
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
            {pageContext?.product.form.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.product.form.text) }}
            size="larger"
          />
        </Section>
        <Section>
          <LinedHeading as="h2">
            Dawkowanie
          </LinedHeading>
          {pageContext?.product.doses.adults && (
          <>
            <Subheading color={pageContext?.color}>
              <div>
                Dorośli
              </div>
            </Subheading>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.product.doses.adults) }}
              hasHighlights
              highlightColor={pageContext?.product.doses['highlight-color']}
              size="larger"
            />
          </>
          )}
          {pageContext?.product.doses.kids && (
          <>
            <Subheading color={pageContext?.color}>
              <div>
                Dzieci i młodzież
              </div>
            </Subheading>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: sanitize(pageContext?.product.doses.kids) }}
              hasHighlights
              highlightColor={lighten(0.4, pageContext?.color)}
              size="larger"
            />
          </>
          )}
        </Section>
        <Section>
          <LinedHeading as="h2">
            {pageContext?.product.contraindications.heading}
          </LinedHeading>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{
              __html: sanitize(pageContext?.product.contraindications.text),
            }}
            size="larger"
          />
        </Section>
      </Container>
    </Content>
  </Main>
);

export default ProductPage;

ProductPage.propTypes = {
  pageContext: PropTypes.shape({
    acf: PropTypes.shape({
      heading: PropTypes.string,
    }),
    color: PropTypes.string,
    cover: PropTypes.shape({}),
    coverPortrait: PropTypes.shape({}),
    cta: PropTypes.shape({
      'buy-now': PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.shape({
          url: PropTypes.string,
        }),
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
    hasPortraitCover: PropTypes.bool,
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

