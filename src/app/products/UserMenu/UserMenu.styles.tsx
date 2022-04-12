import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
`;

export const MenuOpenButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;

  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  transform: translateY(100%);
  bottom: -8px;
  right: 0;
  width: 184px;
  padding: 8px 0;
  background-color: #fff;
  border-radius: 4px;
  z-index: 10;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  border: none;
  width: 100%;
  text-align: left;
  background-color: transparent;
  padding: 12px 16px;
  cursor: pointer;
`;
