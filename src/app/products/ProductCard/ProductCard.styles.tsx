import styled from 'styled-components';

import { Button } from 'app/shared/Button';

export const ProductCardWrapper = styled.div`
  height: 400px;
  width: clamp(270px, 100%, 380px);
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 170px;
  background-color: ${({ theme }) => theme.colors.neutral[300]};
`;

type ProductImageProps = {
  isActive: boolean;
};

export const ProductImage = styled.img<ProductImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
`;

export const Badge = styled.div`
  position: absolute;
  left: 0;
  top: 16px;
  padding: 4px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
`;

export const InfoWrapper = styled.div`
  padding: 16px 16px 24px;

  h2 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 16px;
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  p {
    margin-bottom: 32px;

    height: 64px;
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  ${Button} {
    width: 100%;
  }
`;
