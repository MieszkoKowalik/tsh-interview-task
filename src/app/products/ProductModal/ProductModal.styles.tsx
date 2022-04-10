import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/icon-close.svg';

export const StyledCloseIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.neutral[900]};
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  background-color: ${({ theme }) => `${theme.colors.neutral[900]}e5`};
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 48px);
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 50%;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 354px;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding: 24px;

  h2 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 40px;
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  p {
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 24px;
  }

  @media (min-width: 450px) {
    padding: 24px 32px 56px;
  }
`;
