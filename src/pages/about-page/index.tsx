import React from 'react';
import { Typography, Container, Button } from '@mui/material';

const AboutPage = () => (
  <Container sx={{ mt: 8, textAlign: 'center' }}>
    <Typography component="h1" variant="h2" sx={{ fontStyle: 'italic' }}>About Page</Typography>
    <Button variant="contained">Contained</Button>
  </Container>
);

export default AboutPage;
