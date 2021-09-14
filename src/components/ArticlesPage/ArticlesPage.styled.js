import styled from 'styled-components';

import {
  ButtonLink, Image as GenericImage,
} from '@components';

import { mediaQueries } from '@utils/rwd';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.291666vw;
  width: 100%;

  @media ${mediaQueries.s} {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h3,
  > p {
    padding-right: 2.34375vw;
  }

  @media ${mediaQueries.s} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    > h3 {
      width: 65%;
      margin-bottom: 0;
      padding-right: unset;
      font-size: ${({ theme }) => theme.fonts.sizes.larger};
    }

    > p {
      margin-top: 1em;
      padding-right: unset;
    }
  }

  @media ${mediaQueries.xs} {
    > h3 {
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }
  }
`;

export const Image = styled(GenericImage)`
  margin-bottom: 2.8125vw;

  > img {
    aspect-ratio: 1/0.687;
    object-fit: cover;
  }

  @media ${mediaQueries.s} {
    width: 30%;
  }
`;

export const Link = styled(ButtonLink)`
  margin-top: auto;

  @media ${mediaQueries.s} {
    margin: 1em 0 3em auto;
  }
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

  @media ${mediaQueries.xs} {
    font-size: ${({ theme }) => theme.fonts.sizes.tiny};
  }
`;

export const Section = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  margin-bottom: 5vw;

  @media ${mediaQueries.s} {
    :not(:first-of-type) {
      margin-top: 3em;
    }

    :last-of-type {
      margin-bottom: 3em;
    }
  }

  &:first-of-type {
    &:after {
      ${({ theme }) => theme.getGradient()};
      top: 20%;
      height: 80%;
      background-position: center;
      background-size: 200%;
      transform: translateX(-50%);

      @media ${mediaQueries.s} {
        top: 10%;
        height: 90%;
      }
    }
  }
`;
