import { Box, Typography } from '@mui/material';
import React from 'react';
import { Card } from '../../../types';

type AdminAboutPageInfoCardPageCardTextProps = Omit<Card, 'id' | 'image' | 'updatedAt'>;

const AdminAboutPageInfoCardPageCardText: React.FC<AdminAboutPageInfoCardPageCardTextProps> = ({
  title, city, year, location,
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
    <Typography>{`city: ${city}`}</Typography>
    <Typography>{`location: ${location}`}</Typography>
  </Box>
);

export default AdminAboutPageInfoCardPageCardText;
