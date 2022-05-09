import { Backdrop, Box, keyframes } from '@mui/material';
import React, { useContext } from 'react';
import AuthContext from '../../features/auth/auth-context';
import LoadingLogo from './logo.png';

const rotating = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

const Loading: React.FC = () => {
  const { loading } = useContext(AuthContext);
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
