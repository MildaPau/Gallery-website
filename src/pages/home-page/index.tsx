import React from 'react';
import { Box } from '@mui/material';
import MainSection from './main-section';
import MainText from './main-section/main-text';
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
    <Box sx={{ display: 'flex', gap: 50 }}>
      <InlineAnimation>
        <MainText />
      </InlineAnimation>
    </Box>
    <MainSection />
  </Box>

);

export default HomePage;
