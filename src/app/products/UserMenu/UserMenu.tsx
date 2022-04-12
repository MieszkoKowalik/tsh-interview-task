import { useAuth } from 'providers/AuthProvider';
import React, { useState } from 'react';

import {
  UserMenuWrapper,
  MenuOpenButton,
  MenuList,
  MenuButton,
} from './UserMenu.styles';

import { UserMenuProps } from './UserMenu.types';

const UserMenu = ({ user }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut } = useAuth();

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <UserMenuWrapper>
      <MenuOpenButton aria-label="Menu" onClick={toggleMenu}>
        <img src={user.avatar} alt={user.username} />
      </MenuOpenButton>
      {isOpen && (
        <MenuList>
          <li>
            <MenuButton onClick={logOut}>Logout</MenuButton>
          </li>
        </MenuList>
      )}
    </UserMenuWrapper>
  );
};

export default UserMenu;
