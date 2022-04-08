import { SearchbarWrapper, StyledSearchIcon } from './Searchbar.styles';

import { Input } from 'app/shared/Input';

type SearchbarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Searchbar = ({ value, onChange }: SearchbarProps) => {
  return (
    <SearchbarWrapper>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <StyledSearchIcon />
    </SearchbarWrapper>
  );
};
