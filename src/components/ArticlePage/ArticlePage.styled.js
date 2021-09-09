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
  position: ${({ gradient }) => gradient && 'relative'};
  display: flex;
  flex-direction: ${({ variant }) => {
    if (variant === 'textLeft' || variant === 'twoColText') {
      return 'row';
    }

    if (variant === 'textRight') {
      return 'row-reverse';
    }

    return 'column';
  }};
  justify-content: ${({ variant }) => (variant === 'textLeft' || variant === 'textRight' || variant === 'twoColText' ? 'space-between' : 'flex-start')};
  font-size: ${({
    theme, variant,
  }) => (variant === 'footnotes' ? theme.fonts.sizes.xxsmall : theme.fonts.sizes.small)};
  text-align: ${({ variant }) => variant !== 'footnotes' && 'justify'};

  & + & {
    margin-top: 2em;
  }

  h2 {
    padding-bottom: 1em;
    font-weight: ${({ variant }) => (variant === 'footnotes' ? 'inherit' : 500)};
    font-size: ${({
    theme, variant,
  }) => (variant === 'footnotes' ? 'inherit' : theme.fonts.sizes.xxlarge)};
  }

  p + h2,
  p + p {
    margin-top: 1em;
  }

  ol,
  ul {
    list-style-position: inside;

    > li {

      + li {
        margin-top: 1em;
      }

      > ul,
      > ol {
        margin-left: 1em;
        /* list-style:  */
      }
    }

    &:not(:only-child) {
      margin: 1em 0;
    }
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
  `)}
  ${({ variant }) => variant === 'twoColText' && css`
  > div {
    width: calc(50% - 1.484375vw);
  }
  `};

  ::after {
  ${({
    gradient, theme,
  }) => gradient && css`
    ${theme.getGradient()};
    top: ${gradient.offset}%;
    height: ${(gradient.height)}%;
  `};
  }
`;

export const ArticleImage = styled(Image)`
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
