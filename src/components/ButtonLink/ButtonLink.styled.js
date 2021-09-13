import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { mediaQueries } from '@utils/rwd';

const styles = css`
  position: ${({ $isCentered }) => ($isCentered ? 'relative' : 'static')};
  display: inline-flex;
  justify-content: ${({ $isCentered }) => ($isCentered ? 'center' : 'space-between')};
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 50px;
  padding: 13px 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  line-height: 26px;
  transition: ${({ theme }) => theme.getTransitions(['background-color'])};

  > svg {
    position: ${({ $isCentered }) => ($isCentered ? 'absolute' : 'static')};
    top: ${({ $isCentered }) => ($isCentered ? '50%' : 'auto')};
    right: ${({ $isCentered }) => ($isCentered ? '24px' : 'auto')};
    width: 1.25vw;
    height: auto;
    margin-left: 1.145833vw;
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: ${({ $isCentered }) => ($isCentered ? 'translate(0, -50%)' : 'none')};

    @media ${mediaQueries.s} {
      width: 1.5em;
    }
  }

  &:hover {
    background-color: #fff;

    > svg {
      transform: ${({ $isCentered }) => ($isCentered ? 'translate(33%, -50%)' : 'translateX(33%)')};
    }
  }
`;

export const StyledLink = styled(Link)`
  ${styles}
`;

export const StyledButton = styled.button`
  ${styles}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${({
    disabled, $isCentered,
  }) => disabled && css`
      > svg {
        transform: ${$isCentered ? 'translate(0, -50%)' : 'none'};
      }
    `};
  }
`;
