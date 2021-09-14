import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { Container } from '@components';

import { mediaQueries } from '@utils/rwd';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 5.208333vw;
  background-color: ${({ isPageScrolled }) => (isPageScrolled ? '#fff' : 'transparent')};
  transition: ${({ theme }) => theme.getTransitions(['background-color'])};

  @media ${mediaQueries.s} {
    height: 15vw;
    background-color: #ffffff;
  }
`;

const bar1 = keyframes`
  0% {
    transform: scaleY(0.2);
  }

  50% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0.2);
  }
`;

const bar2 = keyframes`
  0% {
    transform: scaleY(0.7);
  }

  40% {
    transform: scaleY(0.1);
  }

  80% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0.7);
  }
`;

const bar3 = keyframes`
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
`;

const bar4 = keyframes`
  0% {
    transform: scaleY(0.2);
  }

  50% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0.2);
  }
`;

export const PlayButton = styled.button.attrs({
  'aria-label': 'play music',
  type: 'button',
})`
  opacity: ${({ isTranslucent }) => (isTranslucent ? 0.25 : 1)};
  padding: 0;
  background-color: transparent;
  transition: ${({ theme }) => theme.getTransitions(['opacity'])};
  cursor: pointer;

  > svg {
    > g > rect {
      transform-origin: bottom;
    }

    #bar1 {
      animation: ${bar1} 1.2s infinite linear;
    }

    #bar2 {
      animation: ${bar2} 1.2s infinite linear;
    }

    #bar3 {
      animation: ${bar3} 1.2s infinite linear;
    }

    #bar4 {
      animation: ${bar4} 1.2s infinite linear;
    }
  }

  @media ${mediaQueries.s} {
    margin: 0.5em 0;
    padding: 0.5em;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.small};

  @media ${mediaQueries.s} {
    position: fixed;
    top: 15vw;
    right: 0;
    left: 0;
    z-index: 1;
    flex-direction: column;
    background-color: #fff;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(100vw)')};
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-right: 1.71875vw;
  font-size: inherit;

  > svg {
    width: auto;
    height: ${({ theme }) => theme.fonts.sizes.small};
  }

  @media ${mediaQueries.s} {
    margin: 0.5em auto;
    padding: 0.5em;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    height: 1.458333vw;

    @media ${mediaQueries.s} {
      width: 50%;
      height: auto;
      margin: auto;
    }
  }
`;

export const MenuToggle = styled.button.attrs({ type: 'button' })`
  position: relative;
  z-index: 2;
  display: none;
  width: 20px;
  height: 20px;
  padding: 0;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isToggled }) => (isToggled ? 'rotateY(180deg)' : 'none')};
  transform-style: preserve-3d;

  @media ${mediaQueries.s} {
    display: block;
  }

  > svg {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
  }

  > svg:last-child {
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    transform: rotateY(180deg);
  }
`;
