import styled from 'styled-components';
import { Link } from 'gatsby';
import { rgba } from 'polished';

import {
  ExternalLink, Image,
} from '@components';

import {
  Header as GenericHeader, Lead as GenericLead,
} from '@components/GenericPage/GenericPage.styled';

export const Header = styled(GenericHeader)`
  height: 34.6875vw;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderTextWrapper = styled.div`
  width: 57%;

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
`;

export const CTA = styled.aside``;

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

export const Content = styled.article``;

export const Section = styled.section`
  margin-bottom: 4vw;
  padding: 0 5.104167vw;

  > h2 {
    margin-bottom: 1.5vw;
  }
`;

export const LinksMosaic = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.416667vw;
  margin-top: 3vw;

  &::after {
    content: '';
    position: absolute;
    top: 5vw;
    left: 50%;
    z-index: -1;
    width: 100vw;
    height: 90%;
    ${({
    gradient, theme,
  }) => (gradient === 'purple' ? theme.getGradient('#cdc5eb', '#43358c') : theme.getGradient())};
    background-position: center;
    background-size: 150%;
    transform: translate(-50%, 0);
    pointer-events: none;
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
