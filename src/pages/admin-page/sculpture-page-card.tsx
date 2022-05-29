import React from 'react';
import { Box, Button } from '@mui/material';
import { SculptureItem } from '../../types';
import SculpturePageCardText from './sculpture-page-card-text';
import Img from './sculpture-card-img';

type ShopPageCardProps = SculptureItem & {
  deleteItem: (itemId: string) => void,
};

const SculpturePageCard: React.FC<ShopPageCardProps> = ({
  id, img, deleteItem, ...SculpturePageCardTextProps
}) => (
  <>
    <Img src={img} alt="Image" />
    <Box sx={{
      p: 3,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <SculpturePageCardText {...SculpturePageCardTextProps} />
      <Button
        variant="outlined"
        sx={{
          minWidth: '40px',
          alignSelf: 'end',
          mt: 3,
        }}
        onClick={() => deleteItem(id)}
      >
        X
      </Button>
    </Box>
  </>
);

export default SculpturePageCard;
