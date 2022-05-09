import { Backdrop, CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import AuthContext from '../features/auth/auth-context';

const Loading: React.FC = () => {
  const { loading } = useContext(AuthContext);
  return (
    <Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
      <CircularProgress sx={{ color: 'white' }} />
    </Backdrop>
  );
};

export default Loading;
