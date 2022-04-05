import React from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from 'app/shared/SecondaryButton';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
      <h2>Products page</h2>
      <SecondaryButton as={Link} to={AppRoute.Login}>
        Log in
      </SecondaryButton>
    </>
  );
};
