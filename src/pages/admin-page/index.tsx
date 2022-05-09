import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import AuthContext from '../../features/auth/auth-context';
import lightTheme from '../../styles/theme';

const AdminPage: React.FC = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography component="h1" variant="h3">Turinio valdymo sistema</Typography>
        <Button
          onClick={logout}
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: 'primary.main',
            px: 3,
            opacity: 0.9,
            transition: lightTheme.transitions.create('transform', {
              duration: '0.5s',
            }),
            ':hover': {
              opacity: 1,
              transform: 'scale(1.1)',
              backgroundColor: 'primary.main',
            },
          }}
        >
          Logout

        </Button>
      </Box>
    </Container>
  );
};

export default AdminPage;
