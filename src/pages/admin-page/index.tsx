import {
  Box, Button, CircularProgress, Container, Paper, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../components/loading/loading-animation';

import { authLogoutAction, createfetchSculpturesAction } from '../../store/action-creators';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectSculptures, selectSculpturesLoading } from '../../store/selectors';

import lightTheme from '../../styles/theme';
import SculpturePageCard from './sculpture-page-card';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const sculptures = useRootSelector(selectSculptures);
  const sculpturesLoading = useRootSelector(selectSculpturesLoading);
  const dispatch = useRootDispatch();

  const deleteSculpture = (id: string): void => {
    dispatch({
      type: 'DELETE_SCULPTURE',
      payload: { id },
    });
  };

  const logout = () => {
    dispatch(authLogoutAction);
    navigate('/');
  };

  useEffect(() => {
    dispatch(createfetchSculpturesAction);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9 }}>
      <LoadingAnimation />
    </Box>
  );

  if (!sculpturesLoading) {
    pageContent = sculptures.length > 0 ? (
      <Box
        component="section"
        sx={{
          display: 'flex', gap: 5, mb: 6, flexWrap: 'wrap',
        }}
      >
        {sculptures.map((sculpture) => (
          <Paper
            key={sculpture.id}
            sx={{
              maxWidth: 350,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SculpturePageCard {...sculpture} deleteItem={deleteSculpture} />
          </Paper>
        ))}
      </Box>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

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
      <Button
        variant="outlined"
        sx={{ display: 'block', mx: 'auto', mb: 4 }}
        onClick={() => navigate('/create')}
      >
        Add new Sculpture
      </Button>

      {pageContent}

    </Container>
  );
};

export default AdminPage;
