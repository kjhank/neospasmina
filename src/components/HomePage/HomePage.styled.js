import styled from 'styled-components';
import { Link } from 'gatsby';
import { Image } from '@components';
import { mediaQueries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  z-index: 1;

  &::after {
    ${({
    hasGradient, theme,
  }) => hasGradient && theme.getGradient()};
    top: 13.020833vw;
    transform: translateX(-50%);
    pointer-events: none;

    @media ${mediaQueries.xl} {
      top: 20vw;
    }

    @media ${mediaQueries.s} {
      top: 2em;
      height: 120%;
    }
  }
`;

export const ArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.145833vw;
  margin-bottom: 5vw;

  @media ${mediaQueries.s} {
    grid-template-columns: 1fr;
  }
`;

export const SingleArticle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${mediaQueries.s} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;
  }

  > a {
    margin-top: auto;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};

    @media ${mediaQueries.s} {
      margin: auto;
    }
  }
`;

export const Title = styled.h3``;

export const SingleArticleTitle = styled.h4`
  margin-bottom: 1em;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.large};

  @media ${mediaQueries.s} {
    width: 65%;
    margin-bottom: unset;
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }
`;

export const Excerpt = styled.p`
  padding-bottom: 2em;
  font-size: ${({ theme }) => theme.fonts.sizes.small};

  @media ${mediaQueries.s} {
    width: 100%;
    margin-top: 1em;
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  }
`;

export const ArticleImage = styled(Image)`
  margin-bottom: 2.8125vw;

  @media ${mediaQueries.s} {
    width: 30%;
    margin-bottom: unset;
  }
`;

export const LinksMosaic = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 5vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    z-index: 2;
    width: 4px;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent, #fff 25%, #fff 75%, transparent);
    transform: translateX(-50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-image: linear-gradient(to right, transparent, #fff 25%, #fff 75%, transparent);
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media ${mediaQueries.s} {
    grid-template-columns: 1fr;

    &::before,
    &::after {
      background: none;
    }
  }
`;

export const MosaicLinkTitle = styled.h4`
  position: absolute;
  bottom: 0.677083vw;
  left: 0.677083vw;
  width: ${({ isWider }) => (isWider ? '60%' : '48%')};
  color: #fff;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};

  @media ${mediaQueries.huge} {
    font-size: ${({ theme }) => theme.fonts.sizes.larger};
  }

  @media ${mediaQueries.xl} {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  > span {
    padding: 0.338542vw 0.677083vw;
    background-color: rgba(0, 0, 0, 0.33);
    line-height: 1.8;

    > span {
      display: inline-flex;
      align-items: center;

        > svg {
          height: 1em;
          margin-left: 0.5em;
          fill: currentColor;
          transition: ${({ theme }) => theme.getTransitions(['transform'])};
      }
    }
  }
`;

export const MosaicLink = styled(Link)`
  position: relative;
  aspect-ratio: 570/378;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  &:hover {
    filter: brightness(1.1);

    > h4 > span > span > svg {
      transform: translateX(25%);
    }
  }
`;

export const MosaicImage = styled.picture``;

export const Subheading = styled.p`
  margin-bottom: 3.125vw;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  text-align: center;

  @media ${mediaQueries.s} {
    margin-top: 5vw;
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    }
`;
