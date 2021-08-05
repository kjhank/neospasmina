import styled from 'styled-components';
import { Link } from 'gatsby';

export const Footer = styled.footer``;

export const LinksSection = styled.nav``;

export const LinksGroup = styled.section``;

export const LinksHeading = styled.h3``;

export const LinksList = styled.ul``;

export const SingleItem = styled.li``;

export const StyledLink = styled(Link)``;

export const Wrapper = styled.div``;

export const CompanyData = styled.section``;

export const Disclaimer = styled.div`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  font-stretch: condensed;
  text-align: justify;

  p + p {
    margin-top: 1em;
  }

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }
`;

export const Legal = styled(Disclaimer)`
  font-size: ${({ theme }) => theme.fonts.sizes.huge};
  text-align: center;
`;

