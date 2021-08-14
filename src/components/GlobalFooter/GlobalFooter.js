import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, ExternalLink,
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

export const GlobalFooter = ({
  company, legal, links, sil,
}) => (
  <Footer>
    <Wrapper hasGradient>
      <Container>
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
                      dangerouslySetInnerHTML={{ __html: link.title }}
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
            {company?.links.map(link => (
              <ExternalLink
                key={link.text}
                url={link.url}
              >
                {link.text}
              </ExternalLink>
            ))}
          </CompanyLinks>
        </Container>
      </CompanyData>
    </Wrapper>
    <Wrapper>
      <Container>
        <Disclaimer dangerouslySetInnerHTML={{ __html: sil }} />
        <Legal dangerouslySetInnerHTML={{ __html: legal }} />
      </Container>
    </Wrapper>
  </Footer>
);

GlobalFooter.propTypes = {
  company: PropTypes.shape({
    legal: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  legal: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sil: PropTypes.string.isRequired,
};

