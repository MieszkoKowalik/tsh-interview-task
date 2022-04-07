import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	from{
		transform: rotate(0deg);
	}

	to{
		transform: rotate(360deg);
	}
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Track = styled.circle`
  stroke: ${({ theme }) => theme.colors.neutral[300]};
`;

export const Spinner = styled.circle`
  transform-origin: center center;
  animation: 0.8s infinite ${spin} linear;
  stroke: ${({ theme }) => theme.colors.primary};
`;
