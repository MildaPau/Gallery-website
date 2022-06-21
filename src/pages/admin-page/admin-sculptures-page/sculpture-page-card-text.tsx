import { Box, Typography } from '@mui/material';
import React from 'react';
import { Sculpture } from '../../../types';

type SculpturePageCardTextProps = Omit<Sculpture, 'id' | 'image' | 'categories' | 'updatedAt'>;

const SculpturePageCardText: React.FC<SculpturePageCardTextProps> = ({
  title, year, dimensions,
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
  </Box>
);

export default SculpturePageCardText;
