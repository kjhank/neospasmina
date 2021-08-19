import styled, { css } from 'styled-components';

import { Image } from '@components';
import {
  Header as GenericHeader, Lead as GenericLead,
} from '@components/GenericPage/GenericPage.styled';

export const Content = styled.article``;

export const Header = styled(GenericHeader)`
  margin-bottom: 2vw;
`;

export const Lead = styled(GenericLead)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-align: left;
`;

export const SectionHeading = styled.h2``;

export const Section = styled.section`
  display: flex;
  flex-direction: ${({ variant }) => {
    if (variant === 'textLeft') {
      return 'row';
    }

    if (variant === 'textRight') {
      return 'row-reverse';
    }

    return 'column';
  }};
  justify-content: ${({ variant }) => (variant === 'textLeft' || variant === 'textRight' ? 'space-between' : 'flex-start')};
  font-size: ${({
    theme, variant,
  }) => (variant === 'footnotes' ? theme.fonts.sizes.xxsmall : theme.fonts.sizes.small)};
  text-align: justify;

  & + & {
    margin-top: 21em;
  }

  h2 {
    padding-bottom: 1em;
    font-weight: ${({ variant }) => (variant === 'footnotes' ? 'inherit' : 500)};
    font-size: ${({
    theme, variant,
  }) => (variant === 'footnotes' ? 'inherit' : theme.fonts.sizes.xxlarge)};
  }

  p + p {
    margin-top: 1em;
  }

  ol,
  ul {
    list-style-position: inside;
  }

  > picture {
    display: block;
  }
  ${({ variant }) => (variant === 'image' ?
    css`
    > picture {
      width: 100%;
    }
  ` :
    css`
  > picture,
  > div {
      width: calc(50% - 1.484375vw);
    }

  /* > pict */
  `)}
`;

export const ArticleImage = styled(Image)``;

export const Footnotes = styled.section``;
