import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Pagination, Scrollbar,
} from 'swiper';
import {
  Box, Container,
} from '@mui/material';
import SectionExibitionsTitle from './section-exibitions-title';
import SectionExbitionCards from './section-exibition-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const SectionExibitions: React.FC = () => (
  <>
    <SectionExibitionsTitle />
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
      }}
      >
        <SectionExbitionCards />
      </Box>
    </Container>
  </>
);

export default SectionExibitions;
