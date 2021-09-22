import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { mediaQueries } from '@utils/rwd';

export const Wrapper = styled.nav`
  margin: auto 0 1em;
  color: ${({ $isLight }) => ($isLight ? '#fff' : 'inherit')};

  @media ${mediaQueries.s} {
    margin: 1em 0;
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
  }
`;

export const Link = styled(GenericLink)`
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'text-decoration-color',
  ])};

  :hover {
    filter: ${({ $isLight }) => ($isLight ? 'brightness(0.9)' : 'brightness(1.1)')} ;
    text-decoration-color: ${({ $isLight }) => ($isLight ? '#fff' : 'inherit')};
  }
`;

export const Splitter = styled.span`
  display: inline-block;
  margin: 0 0.5em;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li``;
