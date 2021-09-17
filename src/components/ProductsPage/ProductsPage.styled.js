import styled from 'styled-components';

import { ButtonLink } from '@components';
import {
  Content as GenericContent, Header as GenericHeader,
} from '@components/GenericPage/GenericPage.styled';

import { mediaQueries } from '@utils/rwd';

export const FilterButton = styled(ButtonLink).attrs({
  customAs: 'button',
  hasArrow: true,
})`
  font-weight: 500;
  text-transform: uppercase;
`;

export const FiltersWrapper = styled.nav`
  margin-bottom: 7.8125vw;

  > button + button {
    margin-left: 16px;
  }

  @media ${mediaQueries.s} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > button + button {
      margin-top: 16px;
      margin-left: unset;
    }
  }
`;

export const Content = styled(GenericContent)`
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

  @media ${mediaQueries.s} {
    height: auto;
    padding-bottom: 3em;
  }
`;
