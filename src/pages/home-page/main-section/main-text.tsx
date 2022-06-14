import React from 'react';
import { Typography } from '@mui/material';
import theme from '../../../styles/theme';

const MainText: React.FC = () => (
  <Typography
    component="h1"
    variant="h2"
    sx={{
      display: { xs: 'none', sm: 'block' },
      fontSize: { sm: 55, md: 74 },
      fontWeight: 400,
      color: theme.palette.primary.main,
      whiteSpace: 'nowrap',
      pt: 11,
    }}
  >
    SCULPTURE BY EVALDAS PAUZA
  </Typography>
);

export const MainTextXS: React.FC = () => (
  <Typography
    component="h1"
    variant="h2"
    sx={{
      display: { xs: 'block', sm: 'none' },
      fontSize: 50,
      fontWeight: 400,
      color: theme.palette.primary.main,
      // whiteSpace: 'nowrap',
      pt: 11,
    }}
  >
    SCULPTURE BY EVALDAS PAUZA
  </Typography>
);

export default MainText;
