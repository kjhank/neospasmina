import styled from 'styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  position: relative;
  z-index: 1;
`;

export const ArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.145833vw;
`;

export const SingleArticle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > a {
    margin-top: auto;
    font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
  }
`;

export const Title = styled.h3``;

export const SingleArticleTitle = styled.h4`
  margin-bottom: 1em;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
`;

export const Excerpt = styled.p`
  padding-bottom: 2em;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const ArticleImage = styled.picture`
  margin-bottom: 2.8125vw;
`;

export const LinksMosaic = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
`;

export const MosaicLinkTitle = styled.h4`
  position: absolute;
  bottom: 0.677083vw;
  left: 0.677083vw;
  width: ${({ isWider }) => (isWider ? '60%' : '48%')};
  color: #fff;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};

  > span {
    padding: 0.338542vw 0.677083vw;
    background-color: rgba(0, 0, 0, 0.33);
    line-height: 1.8;

    > span {
      display: inline-flex;
      align-items: center;

        > svg {
          height: 1em;
          margin-left: 5px;
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
      transform: translateX(50%);
    }
  }
`;

export const MosaicImage = styled.picture``;
