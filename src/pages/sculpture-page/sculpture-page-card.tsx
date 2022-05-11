import React from 'react';
import { Box, Typography } from '@mui/material';
import Img from '../gallery-page/sculpture-card-img';
import { Sculpture } from '../../store/types';

type SculptureCardProps = Omit<Sculpture, 'id'>;

const SculpturePageCard: React.FC<SculptureCardProps> = ({
  img, title, year, dimensions, price,
}) => (
  <>
    <Img src={img} alt="Image" />
    <Box sx={{ p: 3 }}>
      <Typography
        component="h2"
        variant="h6"
        sx={{
          lineHeight: '24px',
          mb: 2,
          fontStyle: 'italic',
        }}
      >
        {`${title}`}
      </Typography>
      <Typography>{`year: ${year}`}</Typography>
      <Typography>{`dimensions: ${dimensions}`}</Typography>
      <Typography>{`price: ${price}€`}</Typography>
    </Box>
  </>
);

export default SculpturePageCard;
