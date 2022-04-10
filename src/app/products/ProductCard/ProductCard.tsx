import React, { useState } from 'react';

import { Rating } from '../Rating/Rating';
import {
  ProductCardWrapper,
  ImageWrapper,
  Badge,
  InfoWrapper,
  ProductImage,
} from './ProductCard.styles';
import { ProductModal } from '../ProductModal/ProductModal';

import { Button } from 'app/shared/Button';

import { ProductCardProps } from './ProductCard.types';

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
            <Button onClick={() => setIsModalOpen(true)}>Show details</Button>
          ) : (
            <Button disabled>Unavailable</Button>
          )}
        </InfoWrapper>
      </ProductCardWrapper>

      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          product={product}
        />
      )}
    </>
  );
};
