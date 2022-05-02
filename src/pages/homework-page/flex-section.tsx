import React from 'react';
import { Box } from '@mui/material';

const FlexSection: React.FC = ({ children }) => (
  <Box
    component="section"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 5,
      mt: 5,
    }}
  >
    {children}
  </Box>
);

export default FlexSection;
