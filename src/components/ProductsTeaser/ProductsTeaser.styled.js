import styled from 'styled-components';
import { rgba } from 'polished';
import { Link as GatsbyLink } from 'gatsby';

import { Image } from '@components';

import { mediaQueries } from '@utils/rwd';

export const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  margin-top: ${({ smallerMargin }) => (smallerMargin ? '-10%' : '-30%')};
  padding-bottom: 1.5vw;

  > h2 {
    @media ${mediaQueries.xs} {
      font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
      text-align: center;
    }

    @media ${mediaQueries.xxs} {
      font-size: ${({ theme }) => theme.fonts.sizes.larger};
    }
  }
`;

export const ProductsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2%;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding-bottom: 2.5vw;

  @media ${mediaQueries.xs} {
    flex-direction: column;
    margin-bottom: 2em;
    padding-bottom: 3em;
  }
`;

export const SingleProduct = styled.li`
  filter: ${({ theme }) => `drop-shadow(23px 37px 35px ${rgba(theme.colors.shadow, 0.3)})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 32%;
  border-radius: ${({ theme }) => theme.borderRadii.double};
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  @media ${mediaQueries.s} {
    width: 100%;
  }

  @media ${mediaQueries.xs} {
    + li {
      margin-top: 2em;
    }
  }

  > h3 {
    padding: 0 3vw;
    text-align: center;

    @media ${mediaQueries.xxl} {
      font-size: ${({ theme }) => theme.fonts.sizes.large};
    }

    @media ${mediaQueries.l} {
      padding: 0 1em;
    }

    @media ${mediaQueries.s} {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
    }

    @media ${mediaQueries.xs} {
      font-size: ${({ theme }) => theme.fonts.sizes.larger};
    }
  }

  > p {
    padding: 1em calc(2vw + 1em) 0;

    @media ${mediaQueries.xxl} {
      padding: 1em 1em  0;
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }

    @media ${mediaQueries.m} {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
    }

    @media ${mediaQueries.s} {
      font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
    }

    @media ${mediaQueries.xs} {
      padding: 1em 2em 0;
      font-size: ${({ theme }) => theme.fonts.sizes.large};
    }
  }

  &:hover {
    filter: ${({ theme }) => `drop-shadow(37px 50px 50px ${rgba(theme.colors.shadow, 0.5)})`};
  }
`;

export const Link = styled(GatsbyLink)`
  position: relative;
  margin: 2em 0 2vw;
  border: 1px solid ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadii.triple};
  padding: 0.572917vw 2vw;
  background-color: ${({ color }) => color};
  color: #fff;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-align: center;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'background-color',
  ])};

  > svg {
    position: absolute;
    top: 50%;
    right: 0.5em;
    height: 1em;
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: translate(0, -50%);
  }

  &:hover {
    background-color: #fff;
    color: ${({ color }) => color};

    > svg {
      transform: translate(0.5em, -50%);
    }
  }

  @media ${mediaQueries.huge} {
    padding: 0.6vw 3vw;

    > svg {
      right: 1em;
    }
  }

  @media ${mediaQueries.xxl} {
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  }

  @media ${mediaQueries.xl} {
    padding: 0.6vw 3.5vw;
  }

  @media ${mediaQueries.l} {
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
  }

  @media ${mediaQueries.xs} {
    width: 60%;
    margin-bottom: 2em;
    padding: 2vw 0;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
`;

export const ProductImage = styled(Image)`
  margin-top: 1vw;
  margin-bottom: -1em;

  @media ${mediaQueries.xs} {
    margin-top: 2em;
  }
`;
