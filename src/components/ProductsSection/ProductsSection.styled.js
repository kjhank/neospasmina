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
  }

  @media ${mediaQueries.xxlarge} {
    bottom: 1vw;
  }

  @media ${mediaQueries.s} {
    bottom: 0;
    width: 80%;
    margin-left: 10%;
  }
`;
