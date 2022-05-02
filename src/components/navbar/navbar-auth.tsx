import React, { useContext } from 'react';
import {
  Avatar, Box, Button, Typography,
} from '@mui/material';
import NavbarLink from './navbar-link';
import AuthContext from '../../features/auth/auth-context';

const NavbarAuthMenu: React.FC = () => {
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      <NavbarLink to="/homework">Homework</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/gallery">Gallery</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
      <Box>
        <Typography sx={{ color: 'primary.main' }}>{user?.email}</Typography>
      </Box>
      <Button variant="contained" onClick={logout}>Atsijungti</Button>
    </>

  );
};

export default NavbarAuthMenu;
