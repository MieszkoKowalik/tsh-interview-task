import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';

import { AuthProvider } from './AuthProvider';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        {children}
      </AuthProvider>
    </ThemeProvider>
  </Router>
);
