import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const LandingPageLayout: React.FC = () => (
  <>
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default LandingPageLayout;
