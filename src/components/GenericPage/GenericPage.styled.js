import styled from 'styled-components';

import {
  Container as GenericContainer, Image,
} from '@components';

export const Title = styled.h1`
  width: 100%;
  color: ${({
    color, isLight,
  }) => (isLight ? '#fff' : color)};
  font-weight: 500;
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
  width: 100%;
  color: ${({ theme }) => theme.colors.medGray};
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  line-height: 1.5;
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

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
