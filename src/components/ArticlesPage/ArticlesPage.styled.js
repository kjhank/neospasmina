import styled from 'styled-components';
import {
  ButtonLink, Image as GenericImage,
} from '@components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  width: calc(33% - 1.145833vw);
`;

export const Image = styled(GenericImage)``;

export const Link = styled(ButtonLink)``;

export const CategoryLink = styled(ButtonLink)``;
