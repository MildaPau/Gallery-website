import React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../styles/theme';

const MainText: React.FC = () => (
  <Typography
    component="h1"
    variant="h2"
    sx={{
      fontSize: 100,
      fontWeight: 800,
      // fontStyle: 'italic',
      color: theme.palette.primary.main,
      pl: 5,
      mb: 5,
      pt: 8,
    }}
  >
    Sculpture by Evaldas Pauza
  </Typography>
);

export default MainText;
