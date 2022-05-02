import React from 'react';
import { Box } from '@mui/material';

const Logo: React.FC = () => (
  <Box
    component="img"
    src="logo.png"
    sx={{
      position: 'absolute',
      top: 40,
      left: 0,
      width: 65,
    }}
  />
);

export default Logo;
