import React from 'react';
import { Box } from '@mui/material';
import BgImage from './pinokio-galva-contact-page.png';

const ContactPageImage: React.FC = ({ children }) => (
  <Box sx={{
    backgroundImage: `url(${BgImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: { xs: 'center', sm: 'unset' },
  }}
  >
    {children}
  </Box>
);

export default ContactPageImage;
