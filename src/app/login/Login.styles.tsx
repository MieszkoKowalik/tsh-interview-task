import styled from 'styled-components';

import { Button } from 'app/shared/Button';
import { Link } from 'react-router-dom';

import LoginImgSrc from 'assets/images/login.png';

export const StyledHeader = styled.header`
  padding: 40px 24px;
  width: 100%;
`;

export const FormWrapper = styled.main`
  padding: 24px;
  width: 100%;

  h2 {
    margin-bottom: 30px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 22px;

  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

export const LoginButton = styled(Button)`
  margin-top: 34px;
  padding: 15px;
  margin-bottom: 16px;
  width: 100%;
`;

export const LoginPageWrapper = styled.div`
  min-height: 100vh;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 1fr;
    margin: 0 auto;
  }
`;

export const Image = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    background-color: ${({ theme }) => theme.colors.neutral[300]};
    background-image: url(${LoginImgSrc});
    background-position: center;
    background-size: cover;
  }
`;

export const ForgotPassword = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 496px;
  margin: 0 auto;
  grid-template-rows: minmax(112px, 30%) 1fr;
  gap: 20px;

  @media (min-width: 1024px) {
    justify-items: unset;
    margin-left: 10%;
  }
`;
