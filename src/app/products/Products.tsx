import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from 'app/shared/SecondaryButton';
import { Logo } from 'app/shared/Logo';
import { Searchbar } from './Searchbar';
import { Checkbox } from 'app/shared/Checkbox';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  const [isActiveChecked, setIsActiveChecked] = useState(false);
  const [isPromoChecked, setIsPromoChecked] = useState(false);

  const toggleIsActiveChecked = () => setIsActiveChecked((state) => !state);
  const toggleIsPromoChecked = () => setIsPromoChecked((state) => !state);

  return (
    <>
      <Logo />
      <SecondaryButton as={Link} to={AppRoute.Login}>
        Log in
      </SecondaryButton>
      <Searchbar />
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
    </>
  );
};
