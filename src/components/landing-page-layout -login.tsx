import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Loading from './loading/loading';

const LandingPageLayoutLogin: React.FC = () => (
  <Box component="main">
    <Loading />
    <Outlet />
  </Box>
);

export default LandingPageLayoutLogin;
