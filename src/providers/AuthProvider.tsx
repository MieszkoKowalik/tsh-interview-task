import React, { useState } from 'react';

import { mockUser } from 'mocks/user';

import { User } from 'models';
import { AuthProviderProps, AuthContextValue } from './AuthProviders.types';

export const AuthContext = React.createContext<AuthContextValue>(
  {} as AuthContextValue
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = () => {
    setUser(mockUser);
  };

  const logOut = () => {
    setUser(null);
  };

  const value = { user, logIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
