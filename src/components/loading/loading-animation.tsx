import { Box, keyframes } from '@mui/material';
import React from 'react';
import LoadingLogo from './logo.png';

const rotating = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

const LoadingAnimation: React.FC = () => (

  <Box
    component="img"
    src={`${LoadingLogo}`}
    sx={{
      width: 50,
      animation: `${rotating
      } 0.8s infinite`,
    }}
  />
);

export default LoadingAnimation;
