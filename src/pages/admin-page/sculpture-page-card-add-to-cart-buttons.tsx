import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type SculpturePageCardAddToCartButtonsProps = {
  id: string,
  addToCart: (itemId: string) => void,
};

const SculpturePageCardAddToCartButtons: React.FC<SculpturePageCardAddToCartButtonsProps> = ({
  id, addToCart,
}) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'end',
    height: 35,
    gap: 0.5,
  }}
  >
    <Button
      variant="contained"
      size="small"
      sx={{
        minWidth: 'initial', p: 1, height: '100%',
      }}
    >
      +
    </Button>
    <TextField
      size="small"
      sx={{ alignSelf: 'stretch', maxWidth: 50 }}
      InputProps={{ sx: { height: '100%' } }}
      inputProps={{ sx: { height: '100%' } }}
    />

    <Button
      variant="contained"
      size="small"
      sx={{ minWidth: 'initial', p: 1, height: '100%' }}
    >
      -
    </Button>

    <Button
      variant="outlined"
      onClick={() => addToCart(id)}
      sx={{ ml: 1 }}
    >
      Add
      <ShoppingCartIcon sx={{ height: 20, ml: '5px' }} />
    </Button>
  </Box>
);

export default SculpturePageCardAddToCartButtons;
