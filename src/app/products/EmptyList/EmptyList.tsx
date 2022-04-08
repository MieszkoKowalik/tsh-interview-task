import React from 'react';

import { EmptyListWrapper, StyledEmptyListIcon } from './EmptyList.styles';

export const EmptyList = () => {
  return (
    <EmptyListWrapper>
      <StyledEmptyListIcon />
      <h2>Ooops... It's empty here</h2>
      <p>There are no products on the list</p>
    </EmptyListWrapper>
  );
};
