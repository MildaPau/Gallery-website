import React from 'react';
import { Box, Container } from '@mui/material';
import MainSection from './main-section';
import MainText, { MainTextXS } from './main-section/main-text';
import InlineAnimation from './main-section/keyframe';

const HomePage: React.FC = () => (
  <Box
    component="main"
    sx={{
      width: '100%',
      overflow: 'hidden',
      // height: '100vh',
    }}
  >
    <InlineAnimation>
      <MainText />
    </InlineAnimation>
    <Container>
      <MainTextXS />
    </Container>
    <MainSection />
  </Box>

);

export default HomePage;
