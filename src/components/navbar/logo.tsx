import React from 'react';
import { Box } from '@mui/material';

const Logo: React.FC = () => (
  <Box
    component="img"
    src="logo.png"
    sx={{
      width: 37,
      pt: 1,
      ml: 3,
    }}
  />
);

export default Logo;
