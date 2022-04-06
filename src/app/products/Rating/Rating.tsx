import React from 'react';

import {
  StyledFullStarIcon,
  StyledBorderStarIcon,
  Wrapper,
} from './Rating.styles';

import { RatingProps } from './Rating.types';

export const Rating = ({ rating }: RatingProps) => {
  return (
    <Wrapper>
      {[...Array(5)].map((star, index) =>
        index < rating ? (
          <StyledFullStarIcon data-testid="full-star" key={index} />
        ) : (
          <StyledBorderStarIcon data-testid="border-star" key={index} />
        )
      )}
    </Wrapper>
  );
};
