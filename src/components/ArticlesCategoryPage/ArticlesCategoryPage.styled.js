import styled from 'styled-components';

import {
  LinedHeading as GenericLinedHeading,
} from '@components/styled';

import {
  Content as GenericContent, Header as GenericHeader,
} from '@components/GenericPage/GenericPage.styled';
import { Container as GenericContainer } from '@components';

export const LinedHeading = styled(GenericLinedHeading)`
  width: 100%;
  margin-bottom: 2vw;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Header = styled(GenericHeader)`
  height: 38vw;
  margin-bottom: -1vw;
`;

export const Section = styled.section`
  > ul > li:nth-of-type(2) {
    position: relative;
    ::after {
      ${({ theme }) => theme.getGradient()};
      top: 20%;
      height: 85%;
    }
  }
`;

export const Content = styled(GenericContent)`
  a {
    text-decoration: none;
  }
`;

