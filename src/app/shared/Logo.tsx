import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const Logo = () => {
  return <StyledH1> join.tsh.io</StyledH1>;
};
