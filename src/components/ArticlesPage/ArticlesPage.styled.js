import styled from 'styled-components';
import {
  ButtonLink, Image as GenericImage,
} from '@components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.291666vw;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    padding-right: 2.34375vw;
  }
`;

export const Image = styled(GenericImage)`
  margin-bottom: 2.8125vw;

  > img {
    aspect-ratio: 1/0.687;
    object-fit: cover;
  }
`;

export const Link = styled(ButtonLink)`
  margin-top: auto;
`;

export const CategoryLink = styled(ButtonLink)`
  margin-top: 1.822917vw;
  border-color: ${({ theme }) => theme.colors.categoryLink};
  background-color: ${({ theme }) => theme.colors.categoryLink};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  transform: translateY(50%);

  > span > span {
    font-weight: 500;
  }
`;

export const Section = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  margin-bottom: 5vw;

  &:first-of-type {
    &:after {
      ${({ theme }) => theme.getGradient()};
      top: 20%;
      height: 80%;
      background-position: center;
      background-size: 200%;
      transform: translateX(-50%);
    }
  }
`;
