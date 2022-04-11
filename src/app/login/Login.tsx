import React from 'react';

import {
  LoginPageWrapper,
  Image,
  ContentWrapper,
  StyledHeader,
  LogoLink,
  FormWrapper,
  StyledLabel,
  LoginButton,
  ForgotPassword,
} from './Login.styles';

import { Input } from 'app/shared/Input';
import { Logo } from 'app/shared/Logo';

import { AppRoute } from 'routing/AppRoute.enum';

export const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <LoginPageWrapper>
      <Image />

      <ContentWrapper>
        <StyledHeader>
          <LogoLink to={AppRoute.Home}>
            <Logo />
          </LogoLink>
        </StyledHeader>

        <FormWrapper>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <StyledLabel>
              Username
              <Input required placeholder="Enter username" name="username" />
            </StyledLabel>

            <StyledLabel>
              Password
              <Input
                required
                placeholder="Enter password"
                name="password"
                type="password"
              />
            </StyledLabel>

            <LoginButton type="submit">Log in</LoginButton>
          </form>
          <ForgotPassword to="#">Forgot password?</ForgotPassword>
        </FormWrapper>
      </ContentWrapper>
    </LoginPageWrapper>
  );
};
