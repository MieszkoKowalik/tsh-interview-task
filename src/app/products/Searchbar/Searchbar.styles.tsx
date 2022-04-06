import styled from 'styled-components';

import { Input } from 'app/shared/Input';
import { ReactComponent as IconSearch } from 'assets/icons/icon-search.svg';

export const SearchbarWrapper = styled.label`
  grid-column: 1/-1;

  position: relative;
  display: flex;
  align-items: center;

  ${Input} {
    padding-right: 40px;
  }

  @media (min-width: 768px) {
    max-width: 392px;
    grid-column: unset;
  }
`;

export const StyledSearchIcon = styled(IconSearch)`
  position: absolute;
  right: 20px;
  fill: ${({ theme }) => theme.colors.neutral[900]};
`;
