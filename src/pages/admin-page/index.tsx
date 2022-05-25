import {
  Alert,
  Box, Button, Container, Paper, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../components/loading/loading-animation';

import {
  authLogoutAction, createfetchSculpturesAction, deleteSculptureAction, sculpturesClearErrorAction,
} from '../../store/action-creators';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectSculptures, selectSculpturesLoading, selectSculpturesError } from '../../store/selectors';

import lightTheme from '../../styles/theme';
import SculpturePageCard from './sculpture-page-card';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const sculptures = useRootSelector(selectSculptures);
  const sculpturesLoading = useRootSelector(selectSculpturesLoading);
  const error = useRootSelector(selectSculpturesError);
  const dispatch = useRootDispatch();

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
            <SculpturePageCard {...sculpture} deleteItem={() => dispatch(deleteSculptureAction(sculpture.id))} />
          </Paper>
        ))}
      </Box>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography component="h1" variant="h3">Turinio valdymo sistema</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 5 }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/create')}
        >
          Add new Sculpture
        </Button>

        <Button
          onClick={logout}
          variant="outlined"
        >
          Logout
        </Button>
      </Box>
      {error && (
      <Alert color="error" onClose={() => dispatch(sculpturesClearErrorAction)}>{error}</Alert>
      )}

      {pageContent}

    </Container>
  );
};

export default AdminPage;
