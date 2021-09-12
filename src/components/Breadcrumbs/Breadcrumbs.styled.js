import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';

export const Wrapper = styled.nav`
  margin: auto 0 1em;
  color: ${({ isLight }) => (isLight ? '#fff' : 'inherit')};
`;

export const Link = styled(GenericLink)`
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'text-decoration-color',
  ])};

  :hover {
    filter: ${({ isLight }) => (isLight ? 'brightness(0.9)' : 'brightness(1.1)')} ;
    text-decoration-color: ${({ isLight }) => (isLight ? '#fff' : 'inherit')};
  }
`;

export const Splitter = styled.span`
  display: inline-block;
  margin: 0 0.5em;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li``;
