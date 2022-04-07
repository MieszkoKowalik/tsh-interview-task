import React from 'react';

import { Grid } from './ProductsList.styles';
import { ProductCard } from '../ProductCard/ProductCard';
import { EmptyList } from '../EmptyList/EmptyList';

import { ContentWrapper } from 'app/shared/ContentWrapper';

import { ProductsListProps } from './ProductsList.types';

export const ProductsList = ({ products }: ProductsListProps) => {
  if (!products.length) {
    return <EmptyList />;
  }

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
