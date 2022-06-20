import React from 'react';
import { Box, Container } from '@mui/material';
import MainSectionImage from './main-section-image';
import InlineAnimation from '../../components/title-keyframe';
import { MainSectionTitle, MainSectionTitleXS } from './main-section-title';

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
      <MainSectionTitle />
    </InlineAnimation>
    <Container>
      <MainSectionTitleXS />
    </Container>
    <MainSectionImage />
  </Box>

);

export default HomePage;
