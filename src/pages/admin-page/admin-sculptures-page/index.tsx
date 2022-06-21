import {
  Alert,
  Box, Button, Container, Paper, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonScale from '../../../components/button-scale';
import LoadingAnimation from '../../../components/loading/loading-animation';

import {
  createDeleteSculptureActionThunk, fetchSculpturesActionThunk, sculpturesClearErrorAction,
} from '../../../store/action-creators';
import { useRootSelector, useRootDispatch } from '../../../store/hooks';
import { selectSculptures, selectSculpturesLoading, selectSculpturesError } from '../../../store/selectors';
import SculpturePageCard from './sculpture-page-card';

const AdminSculpturePage: React.FC = () => {
  const navigate = useNavigate();
  const sculptures = useRootSelector(selectSculptures);
  const sculpturesLoading = useRootSelector(selectSculpturesLoading);
  const error = useRootSelector(selectSculpturesError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(fetchSculpturesActionThunk);
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
          display: 'flex', gap: 5, mb: 6, flexWrap: 'wrap', justifyContent: 'center',
        }}
      >
        {sculptures.map((sculpture) => (
          <Paper
            key={sculpture.id}
            sx={{
              maxWidth: 250,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SculpturePageCard
              {...sculpture}
              deleteItem={() => dispatch(createDeleteSculptureActionThunk(sculpture.id))}
            />
          </Paper>
        ))}
      </Box>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Container>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 5 }}>
        <ButtonScale
          onClick={() => navigate('/admin/sculptures/create')}
        >
          Add new Sculpture
        </ButtonScale>

        <ButtonScale
          onClick={() => navigate('/admin')}
        >
          Back
        </ButtonScale>
      </Box>
      {error && (
        <Alert
          color="error"
          onClose={() => dispatch(sculpturesClearErrorAction)}
        >
          {error}
        </Alert>
      )}

      {pageContent}

    </Container>
  );
};

export default AdminSculpturePage;
