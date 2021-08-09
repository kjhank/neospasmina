import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components';
import { Arrow } from '@icons';

import {
  ButtonsWrapper, CarouselButton, Heading, HeroImage, SingleItem, Wrapper,
} from './Carousel.styled';

export const Carousel = ({ items }) => {
  const [
    currentItem,
    setCurrentItem,
  ] = useState(0);

  const handleNavigation = direction => {
    if (direction === 'next') {
      setCurrentItem(previous => (previous === items.length - 1 ? 0 : previous + 1));
    } else {
      setCurrentItem(previous => (currentItem === 0 ? items.length - 1 : previous - 1));
    }
  };

  return (
    <Wrapper>
      {items.map((item, index) => (
        <SingleItem
          isCurrent={index === currentItem}
          key={item.post.post_name}
        >
          <Heading>
            {item.post.post_title}
          </Heading>
          <HeroImage>
            <source
              srcSet={`${item.image.url.split('.').slice(0, -1)
                .join('.')}.webp`}
              type="image/webp"
            />
            <source
              srcSet={item.image.url}
              type={`image/${item.image.subtype}`}
            />
            <img
              alt={item.image.alt}
              src={item.image.url}
            />
          </HeroImage>
          <ButtonLink
            to={item.url}
          >
            Dowiedz się więcej
            <Arrow />
          </ButtonLink>
        </SingleItem>
      ))}
      <ButtonsWrapper>
        <CarouselButton
          isFlipped
          onClick={() => handleNavigation('previous')}
        >
          <Arrow />
        </CarouselButton>
        <CarouselButton
          onClick={() => handleNavigation('next')}
        >
          <Arrow />
        </CarouselButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
