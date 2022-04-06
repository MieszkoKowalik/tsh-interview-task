import styled from 'styled-components';

export const Input = styled.input`
  padding: 15px 16px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 8px;
  line-height: 16px;
  font-size: ${({ theme }) => theme.fontSize.s};

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral[700]};
  }
`;
