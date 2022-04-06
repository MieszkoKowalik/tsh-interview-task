import { SearchbarWrapper, StyledSearchIcon } from './Searchbar.styles';

import { Input } from 'app/shared/Input';

export const Searchbar = () => {
  return (
    <SearchbarWrapper>
      <Input type="search" placeholder="Search" aria-label="Search" />
      <StyledSearchIcon />
    </SearchbarWrapper>
  );
};
