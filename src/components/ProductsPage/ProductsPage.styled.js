import styled from 'styled-components';

import { ButtonLink } from '@components';
import {
  Content as GenericContent, Header as GenericHeader,
} from '@components/GenericPage/GenericPage.styled';

export const FilterButton = styled(ButtonLink).attrs({
  customAs: 'button',
  hasArrow: true,
})`
  font-weight: 500;
  text-transform: uppercase;
`;

export const FiltersWrapper = styled.nav`
  margin-bottom: 7.8125vw;
  ${FilterButton} + ${FilterButton} {
    margin-left: 16px;
  }
`;

export const Content = styled(GenericContent)`
  height: 0;
  margin-bottom: 0;
`;

export const Header = styled(GenericHeader)`
  height: 40.416667vw;
  margin-bottom: 0;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
