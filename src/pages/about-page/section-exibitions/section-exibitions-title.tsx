import { Typography } from '@mui/material';
import React from 'react';
import InlineAnimation from '../../../components/title-keyframe';

export const SectionExibitionsTitle: React.FC = () => (
  <InlineAnimation>
    <Typography
      component="h1"
      variant="h2"
      sx={{
        mt: 1,
        mb: 2,
        overflow: 'hidden',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        display: { xs: 'none', sm: 'block' },
      }}
    >
      EXIBITIONS AND AWARDS
    </Typography>
  </InlineAnimation>
);
export const SectionExibitionsTitleXS: React.FC = () => (
  <Typography
    component="h1"
    variant="h2"
    sx={{
      mt: 1,
      mb: 2,
      overflow: 'hidden',
      fontWeight: 400,
      fontSize: '50px',
      display: { xs: 'block', sm: 'none' },
    }}
  >
    EXIBITIONS AND AWARDS
  </Typography>
);
