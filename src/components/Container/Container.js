import styled from 'styled-components';

import { mediaQueries } from '@utils';

export const Container = styled.div`
  position: relative;
  display: ${({ justify }) => (justify ? 'flex' : 'block')};
  justify-content: ${({ justify }) => justify};
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;

  @media ${mediaQueries.xxl} {
    max-width: 59.375vw;
  }

  @media ${mediaQueries.xl} {
    max-width: 75vw;
  }

  @media ${mediaQueries.xs} {
    max-width: 90vw;
  }
`;
