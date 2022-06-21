import React from 'react';
import { Typography } from '@mui/material';
import theme from '../../styles/theme';

const ContactPageTitle: React.FC = () => (
  <Typography
    component="h1"
    variant="h2"
    sx={{
      maxWidth: { xs: '100%', lg: '80%' },
      fontSize: { xs: 48, sm: 50, md: 62 },
      fontWeight: 400,
      color: theme.palette.primary.main,
      pt: 12,
    }}
  >
    IF YOU HAVE ANY QUESTIONS, PLEASE CONTACT ME
  </Typography>
);

export default ContactPageTitle;
