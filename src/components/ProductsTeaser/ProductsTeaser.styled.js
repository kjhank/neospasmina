import styled from 'styled-components';
import { rgba } from 'polished';

import { Link as GatsbyLink } from 'gatsby';

export const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  margin-bottom: -15vw;
  padding-bottom: 1.5vw;

  > div {
    display: grid;
    place-items: center;
  }
`;

export const ProductsList = styled.ul`
  display: inline-flex;
  justify-content: center;
  gap: 0.416667vw;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding-bottom: 2.5vw;
`;

export const SingleProduct = styled.li`
  filter: ${({ theme }) => `drop-shadow(23px 37px 35px ${rgba(theme.colors.shadow, 0.3)})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 18.75vw;
  border-radius: ${({ theme }) => theme.borderRadii.double};
  padding: 1vw 2vw;
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  > p {
    padding: 0 1em;
  }

  &:hover {
    filter: ${({ theme }) => `drop-shadow(37px 50px 50px ${rgba(theme.colors.shadow, 0.5)})`};
  }
`;

export const Link = styled(GatsbyLink)`
  position: relative;
  margin-top: 2em;
  border: 1px solid ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadii.triple};
  padding: 0.572917vw 2vw;
  background-color: ${({ color }) => color};
  color: #fff;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'background-color',
  ])};

  > svg {
    position: absolute;
    top: 50%;
    right: 0.5vw;
    height: 1em;
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: translate(0, -50%);
  }

  &:hover {
    background-color: #fff;
    color: ${({ color }) => color};

    > svg {
      transform: translate(0.5em, -50%);
    }
  }
`;
