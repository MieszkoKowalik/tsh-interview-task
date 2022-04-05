import styled from 'styled-components';

import { ReactComponent as CheckIcon } from 'assets/icons/icon-check.svg';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;

  input {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  span {
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 4px;
    display: grid;
    place-items: center;
    transition: 0.2s color, 0.2;
  }

  :hover,
  :focus-within {
    span {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledCheckIcon = styled(CheckIcon)`
  width: 16px;
  height: 16px;
  fill: #fff;
`;
