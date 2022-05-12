import React from 'react';
import {
  Box, Container, Paper, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import SculpturePageCard from './sculpture-page-card';
import useRootSelector from '../../store/hooks';

const SculpturePage: React.FC = () => {
  const sculptures = useRootSelector((state) => state.sculptures);
  const cart = useRootSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (id: string): void => {
    dispatch({
      type: 'ADD_TO_CART',
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
      <Box component="section" sx={{ display: 'flex', gap: 5, mb: 6 }}>
        {
          sculptures.map((sculpture) => (
            <Paper key={sculpture.id} sx={{ maxWidth: 350 }}>
              <SculpturePageCard {...sculpture} addToCart={addToCart} />
            </Paper>
          ))
        }
      </Box>

      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 6,
        }}
      >
        Chart
      </Typography>
      <Box component="pre">
        {JSON.stringify(cart, null, 2)}
      </Box>
    </Container>
  );
};

export default SculpturePage;
