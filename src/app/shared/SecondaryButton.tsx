import styled from 'styled-components';
import { Button } from './Button';

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};

  :hover,
  :focus {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  :disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.neutral[700]};
  }
`;
