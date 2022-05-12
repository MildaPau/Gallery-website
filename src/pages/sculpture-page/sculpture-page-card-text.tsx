import { Box, Typography } from '@mui/material';
import React from 'react';
import { SculptureItem } from '../../types';

type SculpturePageCardTextProps = Omit<SculptureItem, 'id' | 'img' >;

const SculpturePageCardText: React.FC<SculpturePageCardTextProps> = ({
  title, year, dimensions, price,
}) => (
  <Box>
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
);

export default SculpturePageCardText;
