import React, { useContext } from 'react';
import {
  AppBar,
  Container,
  Box,
} from '@mui/material';
import NavbarLink from './navbar-link';
import Logo from './logo';
import AuthContext from '../../features/auth/auth-context';
import NavbarVisitorMenu from './navbar-visitor';
import NavbarAuthMenu from './navbar-auth';

const Navbar: React.FC = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
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
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
