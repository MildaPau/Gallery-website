import React, { useContext, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import NavbarLink from './navbar-link';
import AuthContext from '../../features/auth/auth-context';

const NavbarAuthMenu: React.FC = () => {
  const { logout, user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const userInitials = user && user.name && user.surname
    ? user.name[0] + user.surname[0]
    : null;

  return (
    <Box
      ref={popperAnchorRef}
      component="section"
      sx={{ display: 'flex' }}
    >
      <Box sx={{ display: 'flex' }}>
        <NavbarLink to="/homework">Homework</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/gallery">Gallery</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleMenuOpen}
      >
        {(userInitials || user?.img) && <Avatar src={user?.img}>{userInitials}</Avatar>}
      </Box>
      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper elevation={3}>
          <MenuList>
            <MenuItem onClick={logout}>
              Atsijungti
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </Box>

  );
};

export default NavbarAuthMenu;

/* <Box sx={{ display: 'flex' }}>
        <Typography sx={{ color: 'primary.main' }}>{user?.email}</Typography>
        <Button variant="contained" onClick={logout} sx={{ fontSize: 12, width: 20 }}>Logout</Button>
      </Box> */
