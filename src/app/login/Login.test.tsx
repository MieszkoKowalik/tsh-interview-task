import React from 'react';

import { render, screen } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', () => {
    render(<Login />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Forgot password?')).toBeInTheDocument();
  });
});
