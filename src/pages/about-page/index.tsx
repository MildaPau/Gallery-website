import React from 'react';
import { Box, Container } from '@mui/material';
import SectionAboutSculptor from './section-about-sculptor';
import SectionExibitions from './section-exibitions';

const AboutPage: React.FC = () => (
  <>
    <Container sx={{ mt: 8, textAlign: 'center' }}>
      <SectionAboutSculptor />
    </Container>
    <Box sx={{ overflow: 'hidden' }}>
      <SectionExibitions />
    </Box>

  </>
);

export default AboutPage;
