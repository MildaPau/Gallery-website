import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRootDispatch, useRootSelector } from '../../../store/hooks';
import { selectCards } from '../../../store/selectors';
import lightTheme from '../../../styles/theme';
import SectionExibitiobCardButton from './section-exibition-card-button';
import { createfetchCardsActionThunk } from '../../../store/action-creators';

const SectionExbitionCard: React.FC = () => {
  const cards = useRootSelector(selectCards);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(createfetchCardsActionThunk);
  }, []);

  return (
    <>
      {cards.map(({
        id, title, image, city, year, location,
      }) => (

        <Box
          key={id}
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: `1px solid ${lightTheme.palette.primary.main}`,
            boxShadow: 3,
            maxWidth: 270,
            backgroundColor: 'transparent',
          }}
        >
          <Box>
            <Typography sx={{
              borderBottom: `1px solid ${lightTheme.palette.primary.main}`,
              color: 'primary.main',
              p: 1,
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
            <Box
              component="img"
              src={`${image}`}
              sx={{ width: '100%' }}
            />
          </Box>
          <SectionExibitiobCardButton>
            read more
            <ArrowForwardIcon />
          </SectionExibitiobCardButton>
        </Box>
      ))}
    </>
  );
};

export default SectionExbitionCard;
