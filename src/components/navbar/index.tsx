import React, { useState, useRef } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Popper,
  Paper,
  MenuList,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import NavbarLink from './navbar-link';
import lightTheme from '../../styles/theme';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >

      <Box
        sx={(theme) => theme.mixins.navbar}
        ref={popperAnchorRef}
      >
        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          height: '100%',
          width: '100%',
          justifyContent: 'space-around',
        }}
        >
          <NavbarLink to="/">home</NavbarLink>
          <NavbarLink to="/about">about</NavbarLink>
          <NavbarLink to="/gallery">gallery</NavbarLink>
          <NavbarLink to="/contact">contact</NavbarLink>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            sx={{
              mr: 2,
              transition: lightTheme.transitions.create(['background'], {
                duration: '0.8s',
              }),
              '&.active': {
                background: lightTheme.palette.neon.main,

              },
              ':hover': {
                background: lightTheme.palette.neon.main,

              },
            }}
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ fontSize: 35, color: 'primary.main' }} />
          </IconButton>
        </Box>
      </Box>

      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper elevation={3}>
          <MenuList>
            <MenuItem onClick={() => handleNavigate('/')}>
              Home
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/about')}>
              About
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/gallery')}>
              Gallery
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/contact')}>
              Contact
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>

    </AppBar>
  );
};
export default Navbar;
