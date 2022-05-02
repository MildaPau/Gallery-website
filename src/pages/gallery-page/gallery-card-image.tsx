import React from 'react';
import { Box } from '@mui/material';

type CalleryCardImageProps = {
  img: string,
};

const GalleryCardImage: React.FC<CalleryCardImageProps> = ({
  img,
}) => (
  <Box
    sx={{
      backgroundImage: `url(${img})`,
      width: 350,
      height: 300,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      p: 1.5,
    }}
  />
);

export default GalleryCardImage;
