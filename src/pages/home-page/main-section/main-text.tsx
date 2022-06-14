import React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../styles/theme';

const MainText: React.FC = () => (
  <Typography
    component="h1"
    variant="h2"
    sx={{
      fontSize: { sm: 50, md: 74 },
      fontWeight: 400,
      color: theme.palette.primary.main,
      pt: 11,
    }}
  >
    SCULPTURE BY EVALDAS PAUZA
  </Typography>
);

export default MainText;
