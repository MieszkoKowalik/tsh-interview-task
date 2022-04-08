import React, { useEffect, useState } from 'react';

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
import { Loader } from 'app/shared/Loader';
import { getProducts } from 'api/getProducts';

import { AppRoute } from 'routing/AppRoute.enum';
import { ProductsData } from 'models';

const LIMIT = 8;

export const Products = () => {
  const [isActiveChecked, setIsActiveChecked] = useState(false);
  const [isPromoChecked, setIsPromoChecked] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductsData>([]);

  const toggleIsActiveChecked = () => setIsActiveChecked((state) => !state);
  const toggleIsPromoChecked = () => setIsPromoChecked((state) => !state);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const filters = {
      limit: LIMIT,
      ...(isActiveChecked && { active: isActiveChecked }),
      ...(isPromoChecked && { promo: isPromoChecked }),
    };
    (async () => {
      setIsLoading(true);
      try {
        const { items } = await getProducts(filters, { signal });
        setProducts(items);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => controller.abort();
  }, [isPromoChecked, isActiveChecked]);

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
        {isLoading ? <Loader /> : <ProductsList products={products} />}
      </StyledMain>
    </GridTemplate>
  );
};
