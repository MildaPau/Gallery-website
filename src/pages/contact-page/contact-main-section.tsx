import React from 'react';
import { Box } from '@mui/material';
import Image from './pinokio-galva.jpg';

const ContactMainSection: React.FC = ({ children }) => (
  <Box
    component="section"
    sx={{
      backgroundImage: `url(${Image})`,
      width: '100%',
      height: '100vh',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {children}
  </Box>
);

export default ContactMainSection;
