import React from 'react';
import { Box, Typography } from '@mui/material';
import { Sculpture } from '../../types';
import Img from './sculpture-card-img';
import hoverCardMixin from './hover-card-mixin';

type SculptureCardProps = Omit<Sculpture, 'id'>;

const SculptureCard: React.FC<SculptureCardProps> = ({
  title, img, year, dimesions,
}) => (
  <Box
    boxShadow={1}
    sx={hoverCardMixin}
  >
    <Img src={img} alt="" />
    <Box className="overlay">
      <Box className="info">
        <Typography variant="h5" sx={{ mb: 2 }}>{title}</Typography>
        <Box sx={{ textAlign: 'left' }}>
          <Typography>
            Year:
            {' '}
            {year}
          </Typography>
          <Typography>
            Dimensions:
            {' '}
            {dimesions}
          </Typography>
        </Box>
      </Box>
    </Box>

  </Box>
);
export default SculptureCard;
