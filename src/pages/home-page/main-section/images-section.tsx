import React from 'react';
import { Box } from '@mui/material';

const ImagesSection: React.FC = ({ children }) => (
  <Box
    component="section"
    sx={{
      display: 'flex',
      justifyContent: 'end',
      gap: 5,
    }}
  >
    {children}
  </Box>
);

export default ImagesSection;
