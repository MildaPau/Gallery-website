import React from 'react';
import {
  AppBar,
  Container,
  Box,
} from '@mui/material';
import NavbarLink from './navbar-link';
import Logo from './logo';
import NavbarVisitorMenu from './navbar-visitor';

const Navbar: React.FC = () => (
  <AppBar
    position="sticky"
    sx={{
      bgcolor: 'common.white',
      boxShadow: 1,
      pb: 1,
    }}
  >
    <Container sx={{ px: { xs: 0, sm: 0, position: 'relative' } }}>
      <Box sx={(theme) => theme.mixins.navbar}>
        <Logo />
        <Box sx={{ display: 'flex' }}>

          <NavbarLink to="/">Home</NavbarLink>
          <NavbarVisitorMenu />
        </Box>
      </Box>
    </Container>
  </AppBar>
);

export default Navbar;
