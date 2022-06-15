import { Box } from '@mui/material';
import React from 'react';
import lightTheme from '../../styles/theme';
import rotating from './leading-keyframe';

const LoadingAnimation: React.FC = () => (
  <Box sx={{
    width: 70,
    height: 70,
    border: `3px solid ${lightTheme.palette.neon.main}`,
    animation: `${rotating} 3s infinite`,
  }}
  />
);

export default LoadingAnimation;
