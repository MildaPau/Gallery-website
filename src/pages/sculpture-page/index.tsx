import React from 'react';
import {
  Box, Button, Container, Paper, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import SculpturePageCard from './sculpture-page-card';
import useRootSelector from '../../store/hooks';

const SculpturePage: React.FC = () => {
  const sculptures = useRootSelector((state) => state.sculptures);
  const cart = useRootSelector((state) => state.cart);
  const dispatch = useDispatch();

  const createNewItem = (): void => {
    dispatch({
      type: 'NEW_SCULPTURE',
      payload: {},
    });
  };
  const deleteItem = (id: string): void => {
    dispatch({
      type: 'DELETE_SCULPTURE',
      payload: { id },
    });
  };

  return (
    <Container sx={{ mt: 6, pb: 6 }}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 6,
        }}
      >
        Gallery / Shop
      </Typography>
      <Button
        variant="outlined"
        sx={{ display: 'block', mx: 'auto', mb: 4 }}
        onClick={() => createNewItem()}
      >
        Add new Sculpture
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
              <SculpturePageCard {...sculpture} deleteItem={deleteItem} />
            </Paper>
          ))
        }
      </Box>
    </Container>
  );
};

export default SculpturePage;
