import {
  Box, Container,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonScale from '../../components/button-scale';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';
import lightTheme from '../../styles/theme';

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
        display: 'flex', width: '100%', justifyContent: 'center', mt: 3, mb: 10,
      }}
      >
        <ButtonScale
          onClick={logout}
          variant="contained"
          sx={{
            color: `${lightTheme.palette.primary.light}`,
            ':hover': {
              background: `${lightTheme.palette.primary.main}`,
            },
          }}
        >
          Logout
        </ButtonScale>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
      >
        <ButtonScale
          onClick={() => navigate('/admin/sculptures')}
          sx={{
            fontSize: '15px',
            p: 1,
          }}
        >
          Sculptures
        </ButtonScale>
        <ButtonScale
          onClick={() => navigate('/admin/infoCard')}
          sx={{
            fontSize: '15px',
            p: 1,
          }}
        >
          About page info card
        </ButtonScale>

      </Box>
    </Container>
  );
};

export default AdminPage;
