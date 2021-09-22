import styled, { css } from 'styled-components';

import {
  Container as GenericContainer, Image,
} from '@components';

import {
  Header as GenericHeader, Lead as GenericLead, Title as GenericTitle,
} from '@components/GenericPage/GenericPage.styled';

import { mediaQueries } from '@utils/rwd';

export const Content = styled.article``;

export const Title = styled(GenericTitle)`
  @media ${mediaQueries.s} {
    padding-top: 1em;
    font-size: ${({ theme }) => theme.fonts.sizes.larger};
  }
`;

export const Header = styled(GenericHeader)`
  margin-bottom: 2vw;
`;

export const Lead = styled(GenericLead)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-align: left;

  @media ${mediaQueries.s} {
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
    text-align: center;
  }
`;

export const SectionHeading = styled.h2``;

export const Section = styled.section`
  position: ${({ gradient }) => gradient && 'relative'};
  overflow-wrap: break-word;
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

    @media ${mediaQueries.s} {
      font-size: ${({
    theme, variant,
  }) => (variant === 'footnotes' ? 'inherit' : theme.fonts.sizes.xlarge)};
      text-align: center;
    }
  }

  p + h2,
  p + p {
    margin-top: 1em;
  }

  ol,
  ul {
    list-style-position: inside;

    > li {
      > ul,
      > ol {
        margin-left: 1em;
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

      @media ${mediaQueries.s} {
        width: 100%;
      }
    }
  `)}
  ${({ variant }) => variant === 'twoColText' && css`
  > div {
    width: calc(50% - 1.484375vw);

    @media ${mediaQueries.s} {
      width: 100%;
    }
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

  @media ${mediaQueries.s} {
    flex-direction: column;
    text-align: left;
  }
`;

export const ArticleImage = styled(Image)`
  > img {
    width: 100%;
    height: 100%;
    margin: ${({ $hasMargin }) => $hasMargin && '2em 0'};
    object-fit: cover;
  }
`;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
