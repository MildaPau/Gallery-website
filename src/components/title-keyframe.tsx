/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { Box, keyframes } from '@mui/material';

const inline = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`;

const InlineAnimation: React.FC = ({ children }) => (
  <Box
    sx={{
      animation: `${inline} 9s linear infinite`,
    }}
  >
    {children}
  </Box>
);

export default InlineAnimation;
