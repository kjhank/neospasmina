import styled from 'styled-components';

import { Image } from '@components';

export const Title = styled.h1`
  /* padding-right: 55%; */
  width: 100%;
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes.huge};
  text-transform: ${({ isLowercase }) => (isLowercase ? 'none' : 'uppercase')};
`;

export const Header = styled.header`
  position: relative;
  height: 35.104167vw;
  margin-bottom: 3.90625vw;
  padding-top: 8.333333vw;
`;

export const Lead = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.medGray};
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  text-align: center;
`;

export const Content = styled.article`
  margin-bottom: 5vw;
  font-size: ${({ theme }) => theme.fonts.sizes.larger};

  h2 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
  }

  p:not(:last-of-type) {
    margin-bottom: 2em;
  }

  b,
  strong {
    font-weight: bold
  }

  em,
  i {
    font-style: italic;
  }
`;

export const Cover = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
