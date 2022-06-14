import { Box } from '@mui/material';
import React from 'react';

const MainSection: React.FC = () => (

  <Box
    component="img"
    src="Su-meile-panding-page-background.png"
    sx={{
      display: 'block',
      float: 'right',
      height: { xs: 'auto', sm: '100vh' },
      width: { xs: '550px', sm: 'auto' },
      m: '0 auto',
    }}
  />

);

export default MainSection;
