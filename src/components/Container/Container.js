import styled from 'styled-components';

import { mediaQueries } from '@utils';

export const Container = styled.div`
  position: relative;
  max-width: 1138px;
  height: 100%;
  margin: 0 auto;

  @media ${mediaQueries.xxl} {
    max-width: 59vw;
  }

  @media ${mediaQueries.xs} {
    max-width: 90vw;
  }
`;
