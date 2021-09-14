import styled from 'styled-components';
import { Link } from 'gatsby';

import { mediaQueries } from '@utils/rwd';

export const Footer = styled.footer`
  position: relative;
  z-index: 1;
`;

export const LinksSection = styled.nav`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 1.979167vw;
  font-size: ${({ theme }) => theme.fonts.sizes.xsmall};

  @media ${mediaQueries.m} {
    grid-template-columns: 1fr;
  }
`;

export const LinksGroup = styled.section`
  @media ${mediaQueries.m} {
    display: flex;
    flex-direction: column;

    & + section {
      margin-top: 1em;
    }
  }
`;

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

export const StyledLink = styled(Link)`
  transition: ${({ theme }) => theme.getTransitions(['color'])};

  &:hover {
    color: #000;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding: ${({
    hasExtraPadding, hasHugePadding,
  }) => {
    if (hasExtraPadding || hasHugePadding) {
      if (hasHugePadding) {
        return '30vw 0 1.875vw';
      }

      return '15vw 0 1.875vw';
    }

    return '1.875vw 0';
  }};

  &::after {
    ${({
    hasGradient, theme,
  }) => hasGradient && theme.getGradient()};
  }

  @media ${mediaQueries.huge} {
    padding: ${({
    hasExtraPadding, hasHugePadding,
  }) => {
    if (hasExtraPadding || hasHugePadding) {
      if (hasHugePadding) {
        return '33vw 0 1.875vw';
      }

      return '15vw 0 1.875vw';
    }

    return '1.875vw 0';
  }};
  }

  @media ${mediaQueries.s} {
    padding: ${({
    hasExtraPadding, hasHugePadding,
  }) => {
    if (hasExtraPadding || hasHugePadding) {
      if (hasHugePadding) {
        return '340vw 0 1.875vw';
      }

      return '15vw 0 1.875vw';
    }

    return '1.875vw 0';
  }};
  }
`;

export const CompanyData = styled.section`
  font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};

  > div {
    border-top: 1px solid ${({ theme }) => theme.colors.medGray};

    @media ${mediaQueries.xxl} {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const CompanyWrapper = styled.div`
  > h2 {
    width: 7.239583vw;
    margin-top: 0.989583vw;
    margin-bottom: 0.885417vw;

    @media ${mediaQueries.m} {
      width: 20%;
    }

    @media ${mediaQueries.s} {
      width: 33%;
      margin: 1em 0;
    }
  }

  @media ${mediaQueries.xxl} {
    display: grid;
    place-items: center;
    margin-bottom: 2em;
  }
`;

export const CompanyLinks = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.tiny};

  @media ${mediaQueries.xxl} {
    justify-content: center;
  }

  @media ${mediaQueries.l} {
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  }

  > a {
    padding-left: 0.33em;
    transition: ${({ theme }) => theme.getTransitions(['color'])};

    @media ${mediaQueries.l} {
      padding: 1em;
    }

    + a {
      &::before {
        content: '|';
        padding-right: 0.33em;

        @media ${mediaQueries.l} {
          padding-right: 1em;
        }
      }
    }

    &:hover {
      color: #000;

      &::before {
        color: ${({ theme }) => theme.colors.text};
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

  @media ${mediaQueries.huge} {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }

  @media ${mediaQueries.xxl} {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }

  @media ${mediaQueries.xl} {
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  }

  @media ${mediaQueries.s} {
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
  }

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

  @media ${mediaQueries.huge} {
    font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  }

  @media ${mediaQueries.xxl} {
    font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  }

  @media ${mediaQueries.xl} {
    font-size: ${({ theme }) => theme.fonts.sizes.larger};
  }

  @media ${mediaQueries.s} {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }
`;

