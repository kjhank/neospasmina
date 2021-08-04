import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.208333vw;
  background-color: transparent;
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
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-right: 1.71875vw;
  font-size: inherit;

  > svg {
    width: auto;
    height: ${({ theme }) => theme.fonts.sizes.small};
  }
`;
