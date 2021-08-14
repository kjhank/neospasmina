import styled from 'styled-components';
import {
  ButtonLink, Image,
} from '@components';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  height: 33.28125vw;
  margin-top: 3vw;
`;

export const ProductsImage = styled(Image)`
  position: absolute;
  top: -3vw;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
`;

export const StyledLink = styled(ButtonLink)``;

export const LinksWrapper = styled.nav`
  position: absolute;
  bottom: 3vw;
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;

  > a {
    width: 11.666667vw;
  }
`;
