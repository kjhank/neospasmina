import styled from 'styled-components';

import {
  Container as GenericContainer, ExternalLink as GenericExternalLink, Image as GenericImage,
} from '@components';

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
`;

export const Link = styled(GenericExternalLink)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.link};
  border-radius: ${({ theme }) => theme.borderRadii.triple};
  padding: 0.625vw 1.979167vw 0.625vw 1.197917vw;
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
`;

export const Image = styled(GenericImage)``;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
