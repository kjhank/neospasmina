import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, ExternalLink, ProductsTeaser,
} from '@components';
import {
  CompanyData,
  CompanyLinks,
  CompanyWrapper,
  Disclaimer,
  Footer,
  Legal,
  StyledLink as Link,
  LinksGroup,
  LinksHeading,
  LinksList,
  LinksSection,
  SingleItem,
  Wrapper,
} from './GlobalFooter.styled';
import { Logo } from './Logo';

const noProductsSlugs = ['strona-glowna'];

export const GlobalFooter = ({
  company, featuredProducts, legal, links, productsRef, path, sil, slug,
}) => (
  <Footer>
    <Wrapper hasGradient>
      <Container>
        {!noProductsSlugs.includes(slug) && (
        <ProductsTeaser
          innerRef={productsRef}
          noHeading={path === '/produkty'}
          products={featuredProducts?.filter(product => product.slug !== slug)}
          smallerMargin={path === '/produkty'}
        />
        )}
        <LinksSection columns={links?.length}>
          {links?.map(linksGroup => (
            <LinksGroup key={JSON.stringify(linksGroup.heading)}>
              <LinksHeading>{linksGroup.heading}</LinksHeading>
              <LinksList>
                {linksGroup.items.map(link => (
                  <SingleItem
                    isUppercase={linksGroup.heading === 'Produkty'}
                    key={link.title}
                  >
                    <Link
                      dangerouslySetInnerHTML={{ __html: sanitize(link.title) }}
                      to={link.slug}
                    />
                  </SingleItem>
                ))}
              </LinksList>
            </LinksGroup>
          ))}
        </LinksSection>
      </Container>
      <CompanyData>
        <Container justify="space-between">
          <CompanyWrapper>
            <h2>
              <Logo />
            </h2>
            {company?.legal}
          </CompanyWrapper>
          <CompanyLinks>
            {company?.links.map(link => (link.type === 'external' ?
              (
                <ExternalLink
                  key={link.text}
                  url={link.url}
                >
                  {link.text}
                </ExternalLink>
              ) :
              (
                <Link
                  key={link.text}
                  to={link.link}
                >
                  {link.text}
                </Link>
              )))}
          </CompanyLinks>
        </Container>
      </CompanyData>
    </Wrapper>
    <Wrapper>
      <Container>
        <Disclaimer dangerouslySetInnerHTML={{ __html: sanitize(sil) }} />
        <Legal dangerouslySetInnerHTML={{ __html: sanitize(legal) }} />
      </Container>
    </Wrapper>
  </Footer>
);

GlobalFooter.propTypes = {
  company: PropTypes.shape({
    legal: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  featuredProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  legal: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  path: PropTypes.string.isRequired,
  productsRef: PropTypes.shape({}).isRequired,
  sil: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
