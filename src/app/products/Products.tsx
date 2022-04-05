import React from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from 'app/shared/SecondaryButton';
import { Logo } from 'app/shared/Logo';

import { AppRoute } from 'routing/AppRoute.enum';
import { Searchbar } from './Searchbar';

export const Products = () => {
  return (
    <>
      <Logo />
      <SecondaryButton as={Link} to={AppRoute.Login}>
        Log in
      </SecondaryButton>
      <Searchbar />
    </>
  );
};
