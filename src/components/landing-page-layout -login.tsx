import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const LandingPageLayoutLogin: React.FC = () => (
  <Box component="main">
    <Outlet />
  </Box>
);

export default LandingPageLayoutLogin;
