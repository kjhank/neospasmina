import styled from 'styled-components';

import {
  Container as GenericContainer, Typography,
} from '@components';

import { Header as GenericHeader } from '@components/GenericPage/GenericPage.styled';

import { mediaQueries } from '@utils/rwd';

export const Container = styled(GenericContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContactData = styled.address`
  align-self: flex-end;
  width: 30%;
  margin-bottom: 1em;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.sizes.larger};

  h2 {
    font-weight: 500;
  }

  > p {
    margin-top: 1em;

    &:first-of-type {
      white-space: nowrap;
    }
  }

  @media ${mediaQueries.xl} {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  @media ${mediaQueries.s} {
    width: 100%;

    > p {
      &:first-of-type {
        white-space: normal;
      }
    }
  }
`;

export const Header = styled(GenericHeader)`
  margin-bottom: 1.302083vw;
`;

export const Legal = styled(Typography)`
  overflow: scroll;
  align-self: flex-end;
  width: 70%;
  height: 10vw;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1vw;
  background-color: #fff;

  h3,
  b,
  strong {
    font-weight: 500;
  }

  em,
  i {
    font-style: italic;
  }

  > p + p { /* stylelint-disable-line no-descending-specificity */
    margin-top: 1em;
  }

  @media ${mediaQueries.l} {
    height: 15vw;
  }

  @media ${mediaQueries.s} {
    width: 100%;
    height: 25vw;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  &::after {
    ${({ theme }) => theme.getGradient()};
    height: 70%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;

  @media ${mediaQueries.s} {
    width: 100%;

    > button {
      margin-left: auto;
    }
  }
`;

export const Label = styled.label`
  width: ${({ variant }) => (variant === 'small_input' ? '48%' : '100%')};
  margin-top: 1.71875vw;
  font-size: ${({ theme }) => theme.fonts.sizes.xsmall};

  @media ${mediaQueries.xs} {
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: ${({ variant }) => (variant === 'textarea' ? '14.166667vw' : 'auto')};
  margin-top: 1vw;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px;
  font-size: 24px;

  @media ${mediaQueries.xl} {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  @media ${mediaQueries.l} {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }

  @media ${mediaQueries.xs} {
    height: ${({ variant }) => (variant === 'textarea' ? '33vw' : 'auto')};
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  }
`;

export const Potter = styled.input`
  appearance: none;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const Legend = styled.p`
  width: 100%;
  margin-top: 1.458333vw;
  margin-bottom: 2vw;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.danger};
`;
