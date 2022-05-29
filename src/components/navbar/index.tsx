import React, { useState, useRef } from 'react';
import {
  AppBar,
  Container,
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
import Logo from './logo';
import NavbarVisitorMenu from './navbar-visitor';

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
      position="sticky"
      sx={{
        bgcolor: 'common.white',
        boxShadow: 1,
        pb: 1,
      }}
    >
      <Container sx={{
        px: { xs: 0, sm: 0 },
      }}
      >
        <Box
          sx={(theme) => theme.mixins.navbar}
          ref={popperAnchorRef}
        >
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarVisitorMenu />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={handleMenuOpen} />
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
              <MenuItem onClick={() => handleNavigate('/homework')}>
                Homework
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
      </Container>
    </AppBar>
  );
};
export default Navbar;
