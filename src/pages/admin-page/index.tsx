import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
    navigate('/');
  };

  return (
    <Container>
      <Box sx={{
        display: 'flex', width: '100%', justifyContent: 'end', mt: 3, mb: 5,
      }}
      >
        <Button
          onClick={logout}
          variant="contained"
        >
          Logout
        </Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate('/admin/sculptures')}
        >
          Sculptures
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate('/admin/infoCard')}
        >
          About page info card
        </Button>

      </Box>
    </Container>
  );
};

export default AdminPage;
