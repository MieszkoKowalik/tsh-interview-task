import React from 'react';

import { Grid } from './ProductsList.styles';
import { ProductCard } from '../ProductCard/ProductCard';

import { ContentWrapper } from 'app/shared/ContentWrapper';

import { ProductsListProps } from './ProductsList.types';

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ContentWrapper>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </ContentWrapper>
  );
};
