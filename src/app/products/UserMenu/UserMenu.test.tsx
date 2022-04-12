import { mockUser } from 'mocks/user';
import React from 'react';

import { render, screen, fireEvent, waitFor } from 'tests';

import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('Opens and closes Menu on click', async () => {
    render(<UserMenu user={mockUser} />);

    fireEvent.click(screen.getByLabelText('Menu'));
    expect(await screen.findByText('Logout')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Menu'));
    waitFor(() => {
      expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    });
  });
});
