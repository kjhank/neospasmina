import styled from 'styled-components';

import {
  Container as GenericContainer, Image,
} from '@components';

import { mediaQueries } from '@utils/rwd';

export const Title = styled.h1`
  width: 100%;
  color: ${({
    color, isLight,
  }) => (isLight ? '#fff' : color)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.huge};
  text-transform: ${({ isLowercase }) => (isLowercase ? 'none' : 'uppercase')};

  @media ${mediaQueries.xs} {
    font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  }
`;

export const Header = styled.header`
  position: relative;
  height: 35.104167vw;
  margin-bottom: 3.90625vw;
  padding-top: 8.333333vw;

  @media ${mediaQueries.xl} {
    height: auto;
  }
`;

export const Lead = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.medGray};
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  line-height: 1.5;
  text-align: center;
`;

export const Content = styled.article`
  margin-bottom: 20vw;
  font-size: ${({ theme }) => theme.fonts.sizes.larger};

  h2 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
  }

  p:not(:last-of-type) {
    margin-bottom: 2em;
  }

  b,
  strong {
    font-weight: bold
  }

  em,
  i {
    font-style: italic;
  }

  a {
    text-decoration-line: underline;
    text-decoration-color: ${({ theme }) => theme.colors.link};
    transition: ${({ theme }) => theme.getTransitions(['text-decoration-color'])};

    :hover {
      text-decoration-color: ${({ theme }) => theme.colors.light};
    }
  }

  ol,
  ul {
    list-style-position: inside;
  }

  @media ${mediaQueries.s} {
    margin: 5em 0;
  }
`;

export const Cover = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media ${mediaQueries.s} {
    display: ${({ $hideOnPortrait }) => ($hideOnPortrait ? 'none' : 'block')};
    /* width: 150%; */
  }
`;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PortraitCover = styled(Cover)`
  display: none;

  @media ${mediaQueries.s} {
    display: block;
    width: 100%;
  }
`;
