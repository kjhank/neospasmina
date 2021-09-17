import styled from 'styled-components';

import {
  Container as GenericContainer,
  ExternalLink as GenericExternalLink,
  Image as GenericImage,
} from '@components';

import {
  Cover as GenericCover, Header as GenericHeader, Lead as GenericLead,
} from '@components/GenericPage/GenericPage.styled';

import { mediaQueries } from '@utils/rwd';

export const Section = styled.section`
  margin-top: 3.229167vw;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.510417vw 0 1.354167vw;

  @media ${mediaQueries.m} {
    > p {
      font-size: ${({ theme }) => theme.fonts.sizes.large};
    }
  }

  @media ${mediaQueries.xs} {
    > picture {
      width: auto;
      height: 1em;

      > img {
        max-height: 100%;
      }
    }

    > p {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
    }
  }
`;

export const Link = styled(GenericExternalLink)`
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.link};
  border-radius: ${({ theme }) => theme.borderRadii.triple};
  padding: 0.625vw 1.979167vw;
  background-color: ${({ theme }) => theme.colors.link};
  color: #fff;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'background-color',
  ])};

  > svg {
    width: auto;
    height: 1.5em;
    margin-right: 0.885417vw;
    fill: currentColor;
  }

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.link};
  }

  @media ${mediaQueries.xs} {
    padding: 0.5em 1em;
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};

    > svg {
      height: 1em;
    }
  }
`;

export const Image = styled(GenericImage)``;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    @media ${mediaQueries.m} {
      font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
    }

    @media ${mediaQueries.xs} {
      margin: 1em 0;
      font-size: ${({ theme }) => theme.fonts.sizes.large};
      text-align: center;
    }
  }
`;

export const Lead = styled(GenericLead)`
  @media ${mediaQueries.huge} {
    padding-top: 4em;
  }

  @media ${mediaQueries.m} {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }

  @media ${mediaQueries.xs} {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
`;

export const Header = styled(GenericHeader)`
  @media ${mediaQueries.huge} {
    height: auto;
  }
`;

export const Cover = styled(GenericCover)`
  > img {
    height: auto;
  }

  @media ${mediaQueries.s} {
    width: 120%;
  }

  @media ${mediaQueries.xs} {
    > img {
      height: auto;
      object-fit: unset;
    }
  }
`;
