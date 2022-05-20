import React from 'react';
import {
  Box, Button, Container, Paper,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SculpturePageCard from './sculpture-page-card';
import { useRootSelector } from '../../store/hooks';

const SculpturePage: React.FC = () => {
  const navigate = useNavigate();
  const sculptures = useRootSelector((state) => state.sculptures);
  const dispatch = useDispatch();

  const createNewSculpture = (): void => {
    dispatch({
      type: 'NEW_SCULPTURE',
      payload: {},
    });
  };
  const deleteSculpture = (id: string): void => {
    dispatch({
      type: 'DELETE_SCULPTURE',
      payload: { id },
    });
  };

  return (
    <Container sx={{ mt: 6, pb: 6 }}>
      <Button
        variant="outlined"
        sx={{ display: 'block', mx: 'auto', mb: 4 }}
        onClick={() => createNewSculpture()}
      >
        Add new Sculpture
      </Button>
      <Button
        onClick={() => navigate('/create')}
      >
        Create new item
      </Button>

      <Box
        component="section"
        sx={{
          display: 'flex', gap: 5, mb: 6, flexWrap: 'wrap',
        }}
      >
        {
          sculptures.map((sculpture) => (
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
          ))
        }
      </Box>
    </Container>
  );
};

export default SculpturePage;
