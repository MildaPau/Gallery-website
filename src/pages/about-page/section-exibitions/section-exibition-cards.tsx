import { Box, Link, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy } from 'swiper';
import { useRootDispatch, useRootSelector } from '../../../store/hooks';
import { selectCards } from '../../../store/selectors';
import lightTheme from '../../../styles/theme';
import SectionExibitiobCardButton from './section-exibition-card-button';
import { createfetchCardsActionThunk } from '../../../store/action-creators';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useStyles from './section-exibition-swiper-style';

SwiperCore.use([Navigation, Pagination, Lazy]);

const SectionExbitionCards: React.FC = () => {
  const cards = useRootSelector(selectCards);
  const dispatch = useRootDispatch();
  const { swiperContainer } = useStyles();

  useEffect(() => {
    dispatch(createfetchCardsActionThunk);
  }, []);

  return (
    <Swiper
      style={{
        width: '100%',
        height: '100%',
      }}
      className={swiperContainer}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      lazy
      pagination={{ clickable: true }}
      breakpoints={{
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {cards.map(({
        id, title, image, city, year, location, link,
      }) => (

        <SwiperSlide
          key={id}
          style={{
            width: '100%', display: 'flex', justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              border: `1px solid ${lightTheme.palette.primary.main}`,
              maxWidth: 300,
              height: 450,
              backgroundColor: 'transparent',
              boxShadow: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography sx={{
                borderBottom: `1px solid ${lightTheme.palette.primary.main}`,
                color: 'primary.main',
                p: 1,
                fontSize: 28,
                lineHeight: 1.4,
              }}
              >
                {title}
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: `1px solid ${lightTheme.palette.primary.main}`,
                color: 'primary.main',
              }}
              >
                <Typography sx={{
                  width: '50%',
                  borderRight: `1px solid ${lightTheme.palette.primary.main}`,
                  p: 1,

                }}
                >
                  {city}
                </Typography>
                <Typography sx={{ p: 1 }}>{year}</Typography>
              </Box>
              <Typography sx={{
                borderBottom: `1px solid ${lightTheme.palette.primary.main}`,
                color: 'primary.main',
                p: 1,
              }}
              >
                {location}
              </Typography>
              <Box>
                <Box
                  component="img"
                  src={`${image}`}
                  sx={{ width: '100%' }}
                />
              </Box>

            </Box>
            <SectionExibitiobCardButton>
              <Link
                href={link}
                target="_blank"
                sx={{ textDecoration: 'none', mr: 1, fontSize: '16px' }}
              >
                read more
              </Link>
              <ArrowForwardIcon />
            </SectionExibitiobCardButton>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SectionExbitionCards;
