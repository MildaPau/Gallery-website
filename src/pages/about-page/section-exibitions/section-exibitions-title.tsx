import { Typography } from '@mui/material';
import React from 'react';
import InlineAnimation from '../../../components/title-keyframe';

const SectionExibitionsTitle: React.FC = () => (
  <InlineAnimation>
    <Typography
      component="h1"
      variant="h2"
      sx={{
        my: 2,
        overflow: 'hidden',
        fontWeight: 400,
        whiteSpace: 'nowrap',
      }}
    >
      EXIBITIONS | EXIBITIONS | EXIBITIONS
    </Typography>
  </InlineAnimation>
);

export default SectionExibitionsTitle;
