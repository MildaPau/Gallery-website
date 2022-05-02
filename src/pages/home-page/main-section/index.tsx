import { Box } from '@mui/material';
import React from 'react';
import ImagesSection from './images-section';
import { BouncingBox, BouncingBox2 } from './keyframe';
import MainText from './main-text';

const MainSection: React.FC = () => (

  <Box component="section" sx={{ p: 0, height: '100vh' }}>
    <MainText />
    <ImagesSection>
      <BouncingBox>
        <Box component="img" src="kareivelis1.png" sx={{ width: 115 }} />
      </BouncingBox>
      <BouncingBox2>
        <Box component="img" src="kareivelis1.png" sx={{ width: 115 }} />
      </BouncingBox2>
      <BouncingBox>
        <Box component="img" src="kareivelis1.png" sx={{ width: 115 }} />
      </BouncingBox>
      <BouncingBox2>
        <Box component="img" src="kareivelis1.png" sx={{ width: 115 }} />
      </BouncingBox2>
      <BouncingBox>
        <Box component="img" src="kareivelis1.png" sx={{ width: 115 }} />
      </BouncingBox>

    </ImagesSection>

  </Box>

);

export default MainSection;
