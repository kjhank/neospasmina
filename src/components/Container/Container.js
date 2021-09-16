import styled from 'styled-components';

import { mediaQueries } from '@utils';

export const Container = styled.div`
  position: relative;
  display: ${({ justify }) => (justify ? 'flex' : 'block')};
  justify-content: ${({ justify }) => justify};
  width: 60vw;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;

  @media ${mediaQueries.xxl} {
    width: auto;
    max-width: 65vw;
  }

  @media ${mediaQueries.xl} {
    max-width: 80vw;
  }

  @media ${mediaQueries.xs} {
    max-width: 90vw;
  }
`;
