import styled from 'styled-components';

import {
  ButtonLink, Image,
} from '@components';

import { mediaQueries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  height: 33.28125vw;
  margin-top: 3vw;

  @media ${mediaQueries.l} {
    height: 37vw;
  }

  @media ${mediaQueries.s} {
    height: 45vw;
    margin-bottom: 5vw;
  }
`;

export const ProductsImage = styled(Image)`
  position: absolute;
  top: 5vw;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  pointer-events: none;

  @media ${mediaQueries.s} {
    top: 10vw;
  }
`;

export const StyledLink = styled(ButtonLink)`
  @media ${mediaQueries.s} {
    padding: 4px 10px;
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall}
  }
`;

export const LinksWrapper = styled.nav`
  position: absolute;
  bottom: 3vw;
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;

  > a {
    min-width: 11.666667vw;

    :first-of-type {
      @media ${mediaQueries.huge} {
        margin-left: 6em;
      }

      @media ${mediaQueries.xxl} {
        margin-left: 8em;
      }

      @media ${mediaQueries.xl} {
        margin-left: 16em;
      }
    }

    :last-of-type {
      @media ${mediaQueries.huge} {
        margin-right: 4em;
      }

      @media ${mediaQueries.xxl} {
        margin-right: 6em;
      }

      @media ${mediaQueries.xl} {
        margin-right: 14em;
      }

      @media ${mediaQueries.l} {
        margin-right: 12em;
      }
    }
  }

  @media ${mediaQueries.xxlarge} {
    bottom: 1vw;
  }

  @media ${mediaQueries.m} {
    justify-content: center;

    > a {
      :first-of-type {
        margin-left: auto;
      }

      :last-of-type {
        margin-right: auto;
        margin-left: 2em;
      }
    }
  }

  @media ${mediaQueries.s} {
    bottom: 0;
    width: 80%;
    margin-left: 10%;

    > a {
      :last-of-type {
        margin-left: 4em;
      }
    }
  }

  @media ${mediaQueries.xs} {
    > a {
      :last-of-type {
        margin-left: 2em;
      }
    }
  }
`;
