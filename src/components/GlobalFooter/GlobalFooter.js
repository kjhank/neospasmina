import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import {
  CompanyData,
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
  // company,
  legal, links, sil,
}) => (
  <Footer>
    <Wrapper>
      <Container>
        <LinksSection>
          {links.map(linksGroup => (
            <LinksGroup>
              <LinksHeading>{linksGroup.heading}</LinksHeading>
              <LinksList>
                {linksGroup.items.map(link => (
                  <SingleItem>
                    <Link to={link.slug}>
                      {link.title}
                    </Link>
                  </SingleItem>
                ))}
              </LinksList>
            </LinksGroup>
          ))}
        </LinksSection>
      </Container>
      <CompanyData>
        <Container>
          <Logo />
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
  company: PropTypes.shape({}).isRequired,
  legal: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sil: PropTypes.string.isRequired,
};

