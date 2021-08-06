import styled from 'styled-components';
import { Link } from 'gatsby';

export const Footer = styled.footer``;

export const LinksSection = styled.nav`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 1.979167vw;
  font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
`;

export const LinksGroup = styled.section``;

export const LinksHeading = styled.h3`
  padding-bottom: 0.5em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const LinksList = styled.ul``;

export const SingleItem = styled.li`
  padding: 0.5em 0;
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : null)};
`;

export const StyledLink = styled(Link)``;

export const Wrapper = styled.div`
  padding: 1.875vw 0;
  ${({
    hasGradient, theme,
  }) => hasGradient && theme.getGradient()};
`;

export const CompanyData = styled.section`
  font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};

  > div {
    border-top: 1px solid ${({ theme }) => theme.colors.medGray};
  }
`;

export const CompanyWrapper = styled.div`
  > h2 {
    width: 7.239583vw;
    margin-top: 0.989583vw;
    margin-bottom: 0.885417vw;
  }
`;

export const CompanyLinks = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.tiny};

  > a {
    padding-left: 0.33em;

    + a {
      &::before {
        content: '|';
        padding-right: 0.33em;
      }
    }

    &:hover {
      text-decoration: underline;

      &::before {
        text-decoration: none;
      }
    }
  }
`;

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
  margin-top: 1em;
  font-size: ${({ theme }) => theme.fonts.sizes.huge};
  text-align: center;
`;

