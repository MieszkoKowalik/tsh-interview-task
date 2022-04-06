import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  StyledHeader,
  FiltersWrapper,
  StyledContentWrapper,
  StyledMain,
  GridTemplate,
} from './Products.style';
import { ProductsList } from './ProductsList/ProductsList';
import { Searchbar } from './Searchbar/Searchbar';

import { SecondaryButton } from 'app/shared/SecondaryButton';
import { Logo } from 'app/shared/Logo';
import { Checkbox } from 'app/shared/Checkbox';

import { mockProducts } from 'mocks/products';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  const [isActiveChecked, setIsActiveChecked] = useState(false);
  const [isPromoChecked, setIsPromoChecked] = useState(false);

  const toggleIsActiveChecked = () => setIsActiveChecked((state) => !state);
  const toggleIsPromoChecked = () => setIsPromoChecked((state) => !state);

  return (
    <GridTemplate>
      <StyledHeader>
        <StyledContentWrapper>
          <Logo />

          <SecondaryButton as={Link} to={AppRoute.Login}>
            Log in
          </SecondaryButton>

          <Searchbar />

          <FiltersWrapper>
            <Checkbox
              checked={isActiveChecked}
              onChange={toggleIsActiveChecked}
              label="Active"
            />
            <Checkbox
              checked={isPromoChecked}
              onChange={toggleIsPromoChecked}
              label="Promo"
            />
          </FiltersWrapper>
        </StyledContentWrapper>
      </StyledHeader>

      <StyledMain>
        <ProductsList products={mockProducts} />
      </StyledMain>
    </GridTemplate>
  );
};
