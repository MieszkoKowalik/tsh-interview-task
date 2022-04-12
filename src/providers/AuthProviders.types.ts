import { ReactNode } from 'react';

import { User } from 'models';

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextValue = {
  user: User | null;
  logIn: () => void;
  logOut: () => void;
};
