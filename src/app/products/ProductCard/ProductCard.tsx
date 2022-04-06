import React from 'react';

import { Rating } from '../Rating/Rating';
import {
  ProductCardWrapper,
  ImageWrapper,
  Badge,
  InfoWrapper,
  ProductImage,
} from './ProductCard.styles';

import { Button } from 'app/shared/Button';

import { ProductCardProps } from './ProductCard.types';

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardWrapper key={product.id}>
      <ImageWrapper>
        <ProductImage
          isActive={product.active}
          src={product.image}
          alt={product.name}
        />
        {product.promo ? <Badge>Promo</Badge> : null}
      </ImageWrapper>

      <InfoWrapper>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Rating rating={product.rating} />
        {product.active ? (
          <Button>Show details</Button>
        ) : (
          <Button disabled>Unavailable</Button>
        )}
      </InfoWrapper>
    </ProductCardWrapper>
  );
};
