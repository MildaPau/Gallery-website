import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import ButtonScale from '../../components/button-scale';

const ContactPageForm: React.FC = () => (
  <Box
    component="form"
    sx={{
      maxWidth: 400,
      px: 4,
      py: 3,
      mt: { xs: 5, lg: 7 },
      mx: { xs: 2, md: 0 },
      bgcolor: 'formColor.main',
      boxShadow: 4,
      position: { lg: 'fixed' },
    }}
  >
    <TextField
      type="email"
      label="Email"
      variant="standard"
      fullWidth
      sx={{ mt: 2 }}
    />
    <TextField
      type="title"
      label="Phone number"
      variant="standard"
      fullWidth
      sx={{ mt: 2 }}
    />
    <TextField
      id="message"
      label="Message"
      multiline
      rows={3}
      variant="standard"
      fullWidth
      sx={{
        mt: 2,
      }}
    />
    <ButtonScale
      type="button"
      sx={{
        display: 'block',
        mt: 2,
        m: '0 auto',
      }}
    >
      SEND
    </ButtonScale>
  </Box>
);

export default ContactPageForm;
