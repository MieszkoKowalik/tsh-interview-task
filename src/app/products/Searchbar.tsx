import { Input } from 'app/shared/Input';
import { SearchbarWrapper, StyledSearchIcon } from './Searchbar.styles';

export const Searchbar = () => {
  return (
    <SearchbarWrapper>
      <Input type="search" placeholder="Search" aria-label="Search" />
      <StyledSearchIcon />
    </SearchbarWrapper>
  );
};
