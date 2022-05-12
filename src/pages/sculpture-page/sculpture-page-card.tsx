import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import Img from '../gallery-page/sculpture-card-img';
import { SculptureItem } from '../../types';
import SculpturePageCardAddToCartButtons from './sculpture-page-card-add-to-cart-buttons';
import SculpturePageCardText from './sculpture-page-card-text';

type ShopPageCardProps = SculptureItem & {
  addToCart: (itemId: string) => void,
};

const SculpturePageCard: React.FC<ShopPageCardProps> = ({
  id, img, addToCart, ...SculpturePageCardTextProps
}) => (
  <>
    <Img src={img} alt="Image" />
    <Box sx={{
      p: 3,
      height: 250,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <SculpturePageCardText {...SculpturePageCardTextProps} />
      <SculpturePageCardAddToCartButtons
        id={id}
        addToCart={addToCart}
      />
    </Box>
  </>
);

export default SculpturePageCard;
