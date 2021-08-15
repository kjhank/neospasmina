import styled from 'styled-components';

export const LinedHeading = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
  }

  &::before {
    margin-right: 1em;
  }

  &::after {
    margin-left: 1em;
  }
`;
