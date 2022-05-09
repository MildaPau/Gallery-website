import React from 'react';
import { Box, Container } from '@mui/material';
import MainSection from './main-section';

const HomePage: React.FC = () => (
  <Box
    component="main"
    sx={{
      width: '100%',
    }}
  >
    <Container sx={{ p: 0, height: '100vh' }}>
      <MainSection />
    </Container>
  </Box>

);

export default HomePage;
