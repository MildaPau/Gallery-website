import React from 'react';
import SwiperCore, {
  Navigation, Pagination, Scrollbar,
} from 'swiper';
import {
  Box, Container,
} from '@mui/material';
import { SectionExibitionsTitle, SectionExibitionsTitleXS } from './section-exibitions-title';
import SectionExbitionCards from './section-exibition-cards';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const SectionExibitions: React.FC = () => (
  <>
    <SectionExibitionsTitle />
    <Container>
      <SectionExibitionsTitleXS />
    </Container>
    <Container>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        my: 4,
        gap: 3,
        mb: { xs: 9, sm: 5 },
      }}
      >
        <SectionExbitionCards />
      </Box>
    </Container>
  </>
);

export default SectionExibitions;
