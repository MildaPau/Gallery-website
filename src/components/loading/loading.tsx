import { Backdrop, Box, keyframes } from '@mui/material';
import React from 'react';
import { useRootSelector } from '../../store/hooks';
import { selectAuthLoading } from '../../store/selectors';
import LoadingLogo from './logo.png';

const rotating = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

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
      <Box
        component="img"
        src={`${LoadingLogo}`}
        sx={{
          width: 50,
          animation: `${rotating
          } 0.8s infinite`,
        }}
      />
    </Backdrop>
  );
};

export default Loading;
