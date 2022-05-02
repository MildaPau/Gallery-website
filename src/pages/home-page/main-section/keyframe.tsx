import React from 'react';
import { Box, keyframes } from '@mui/material';

const bouncing = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
`;
const bouncing2 = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

export const BouncingBox: React.FC = ({ children }) => (
  <Box
    sx={{
      animation: `${bouncing
      } 1.5s infinite alternate linear`,
    }}
  >
    {children}
  </Box>
);

export const BouncingBox2: React.FC = ({ children }) => (
  <Box
    sx={{
      animation: `${bouncing2
      } 1.5s infinite alternate linear`,
    }}
  >
    {children}
  </Box>
);
