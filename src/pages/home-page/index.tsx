import React from 'react';
import { Box, Container } from '@mui/material';
import MainSection from './main-section';
import lightTheme from '../../styles/theme';

const HomePage: React.FC = () => (
  <Box
    component="main"
    sx={{
      width: '100%',
      background: lightTheme.palette.primary.light,
    }}
  >
    <Container sx={{ p: 0, height: '100vh' }}>
      <MainSection />
    </Container>
  </Box>

);

export default HomePage;
