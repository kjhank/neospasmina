import styled from 'styled-components';
import { mediaQueries } from '@utils/rwd';

export const LinedHeading = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
  }

  &::before {
    margin-right: 1em;
  }

  &::after {
    margin-left: 1em;
  }

  @media ${mediaQueries.s} {
    font-size: ${({ theme }) => theme.fonts.sizes.large};

    ::before {
      margin-right: 0.5em;
    }

    ::after {
      margin-left: 0.5em;
    }
  }
`;

export const Main = styled.main`
  @media ${mediaQueries.s} {
    margin-top: 15vw;
  }
`;
