import styled from 'styled-components';
import { Link } from 'gatsby';
import { rgba } from 'polished';

import {
  ExternalLink, Image,
} from '@components';

import {
  Header as GenericHeader, Lead as GenericLead,
} from '@components/GenericPage/GenericPage.styled';

import { mediaQueries } from '@utils/rwd';

export const Header = styled(GenericHeader)`
  height: 34.6875vw;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${mediaQueries.huge} {
    height: auto;
  }
`;

export const HeaderTextWrapper = styled.div`
  width: 57%;

  @media ${mediaQueries.xxl} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${mediaQueries.l} {
    width: 70%;
  }

  @media ${mediaQueries.s} {
    width: 100%;
  }

  > h1 {
    padding-right: unset;
  }
`;

export const Lead = styled(GenericLead)`
  position: static;
  margin-top: 12.5vw;
  margin-bottom: 6vw;
  padding-right: 10%;
  color: ${({ color }) => color};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  text-align: left;

  @media ${mediaQueries.huge} {
    align-self: flex-end;
    margin-bottom: 2em;
  }

  @media ${mediaQueries.xxl} {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  @media ${mediaQueries.l} {
    margin-bottom: 0;
  }
`;

export const CTA = styled.aside`
  width: 43%;

  @media ${mediaQueries.s} {
    width: 50%;
    margin-left: auto;
  }
`;

export const CTAButtonsWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

export const CTAImage = styled(Image)`
  display: block;
  margin-bottom: -4vw;
`;

export const CTAButtonLink = styled(ExternalLink)`
  border: ${({ color }) => `2px solid ${color}`};
  border-radius: ${({ theme }) => theme.borderRadii.triple};
  padding: 0.572917vw 1.770833vw;
  background-color: ${({
    color, variant,
  }) => (variant.includes('filled') ? color : 'transparent')};
  color: ${({
    color, variant,
  }) => (variant.includes('filled') ? '#fff' : color)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'background-color',
  ])};

  & + & {
    margin-left: 1vw;
  }

  &:hover {
    background-color: ${({
    color, variant,
  }) => (variant.includes('filled') ? '#fff' : color)};
    color: ${({
    color, variant,
  }) => (variant.includes('filled') ? color : '#fff')};
  }
`;

export const Content = styled.article`
  margin-bottom: 25em;

  @media ${mediaQueries.m} {
    margin-bottom: 20em;
  }

  > div {
    > p {
      @media ${mediaQueries.xxl} {
        font-size: ${({ theme }) => theme.fonts.sizes.larger};
      }

      @media ${mediaQueries.s} {
        font-size: ${({ theme }) => theme.fonts.sizes.medium};
      }
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 4vw;
  padding: 0 5.104167vw;

  > h2 {
    margin-bottom: 1.5vw;

    @media ${mediaQueries.xxl} {
      font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
    }
  }

  > div {
    @media ${mediaQueries.xxl} {
      font-size: ${({ theme }) => theme.fonts.sizes.large};
    }

    @media ${mediaQueries.s} {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
    }
  }
`;

export const LinksMosaic = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.416667vw;
  margin-top: 3vw;
  text-align: center;

  &::after {
    ${({
    gradient, theme,
  }) => (gradient === 'purple' ? theme.getGradient('#cdc5eb', '#43358c') : theme.getGradient())};
    top: 5vw;
    height: 90%;
    background-position: center;
    pointer-events: none;
  }

  @media ${mediaQueries.xs} {
    grid-template-columns: 1fr;
  }
`;

export const SingleTile = styled.li`
  backface-visibility: hidden;
  filter: ${({ theme }) => `drop-shadow(23px 37px 35px ${rgba(theme.colors.shadow, 0.3)})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadii.double};
  padding: 1vw 4.375vw;
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  &:hover {
    filter: ${({ theme }) => `drop-shadow(37px 50px 50px ${rgba(theme.colors.shadow, 0.5)})`};
  }

  > h3 {
    @media ${mediaQueries.m} {
      font-size: ${({ theme }) => theme.fonts.sizes.medium}
    }
  }
`;

export const TileImage = styled(Image)``;

export const TileLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 1vw;
  border: 1px solid ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadii.triple};
  padding: 0.572917vw 1.197917vw;
  background-color: ${({ color }) => color};
  color: #fff;
  font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};

  > svg {
    height: 1em;
    margin-left: 0.5em;
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  &:hover {
    background-color: #fff;
    color: ${({ color }) => color};

    > svg {
      transform: translate(1em);
    }
  }
`;

export const Subheading = styled.h3`
  margin-top: 1.5vw;
  margin-bottom: 2vw;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  text-align: center;

  > div {
    display: inline-block;
    margin: auto;
    border-radius: ${({ theme }) => theme.borderRadii.triple};
    padding: 0.3vw 2vw;
    background-color: ${({ color }) => color};
    color: #fff;
  }
`;
