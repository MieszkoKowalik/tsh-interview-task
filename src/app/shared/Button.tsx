import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 10px 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  text-decoration: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.neutral[700]};
    border-color: ${({ theme }) => theme.colors.neutral[700]};
    cursor: not-allowed;
  }
`;
