import styled from 'styled-components';
import { Image } from '@components';

import { mediaQueries } from '@utils/rwd';

export const Wrapper = styled.ul`
  position: relative;
  height: 35.104167vw;

  @media ${mediaQueries.s} {
    height: 45vw;
  }
`;

export const SingleItem = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => theme.getTransitions(['opacity'])};

  > a {
    @media ${mediaQueries.s} {
      padding: 4px 10px;
      font-size: ${({ theme }) => theme.fonts.sizes.xxsmall}
    }
  }
`;

export const HeroImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  width: 100vw;
  transform: translate(-50%, 0);
`;

export const ButtonsWrapper = styled.nav`
  position: absolute;
  right: 0;
  bottom: 1.145833vw;
  z-index: 3;
`;

export const CarouselButton = styled.button`
  width: 2.34375vw;
  height: 2.34375vw;
  cursor: pointer;

  @media ${mediaQueries.m} {
    width: 2em;
  }

  & + & {
    margin-left: 1.40625vw;
  }

  > svg {
    width: 100%;
    height: auto;
    transform: ${({ isFlipped }) => (isFlipped ? 'rotate(180deg)' : 'none')};
    fill: currentColor;
  }
`;

export const Heading = styled.h2`
  width: 33%;
  margin-bottom: 3.125vw;
  padding-top: 8.333333vw;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.huge};

  @media ${mediaQueries.s} {
    width: 50%;
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }
`;
