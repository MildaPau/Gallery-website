import { Backdrop, Box } from '@mui/material';
import React from 'react';
import { useRootSelector } from '../../store/hooks';
import { selectAuthLoading } from '../../store/selectors';
import lightTheme from '../../styles/theme';
import rotating from './leading-keyframe';

const Loading: React.FC = () => {
  const loading = useRootSelector(selectAuthLoading);
  return (
    <Backdrop
      open={loading}
      sx={{
        background: 'white',
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box sx={{
          width: 70,
          height: 70,
          border: `3px solid ${lightTheme.palette.neon.main}`,
          animation: `${rotating} 3s infinite`,
        }}
        />
        <Box sx={{
          width: 70,
          height: 70,
          border: `3px solid ${lightTheme.palette.primary.main}`,
          animation: `${rotating} 3s infinite`,
        }}
        />
        <Box sx={{
          width: 70,
          height: 70,
          border: `3px solid ${lightTheme.palette.neon.main}`,
          animation: `${rotating} 3s infinite`,
        }}
        />
      </Box>
    </Backdrop>
  );
};

export default Loading;
