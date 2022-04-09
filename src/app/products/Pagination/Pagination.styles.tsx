import styled from 'styled-components';

import { PaginationItemProps } from './Pagination.types';

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.neutral[900]};

  @media (min-width: 768px) {
    margin-top: 56px;
  }
`;

export const PaginationButton = styled.button<PaginationItemProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.neutral[900]};

  background-color: transparent;
  border: none;
  cursor: pointer;

  :disabled {
    color: ${({ theme }) => theme.colors.neutral[700]};
    cursor: not-allowed;
  }
`;
