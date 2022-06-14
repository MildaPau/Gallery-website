import React from 'react';
import { Container } from '@mui/material';
import SectionAboutSculptor from './section-about-sculptor';

const AboutPage: React.FC = () => (
  <Container sx={{ mt: 8, textAlign: 'center' }}>
    <SectionAboutSculptor />
  </Container>
);

export default AboutPage;
