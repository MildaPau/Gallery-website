import React, { useContext } from 'react';
import { Button } from '@mui/material';
import NavbarLink from './navbar-link';
import AuthContext from '../../features/auth/auth-context';

const NavbarAuthMenu: React.FC = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <NavbarLink to="/homework">Homework</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/gallery">Gallery</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
      <Button variant="contained" onClick={logout}>Atsijungti</Button>
    </>

  );
};

export default NavbarAuthMenu;
