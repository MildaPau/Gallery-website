import React, { useState, useEffect } from 'react';
import {
  Stack, ImageList, ImageListItem as ImageListStyled, Box, Container, ImageListItemBar, Typography,
} from '@mui/material';
import axios from 'axios';
import { Sculpture } from '../../types';
import lightTheme from '../../styles/theme';

const GalleryPage: React.FC = () => {
  const [sculptures, setSculptures] = useState<Sculpture[]>([]);

  useEffect(() => {
    axios.get<Sculpture[]>('http://localhost:8000/sculptures')
      .then(({ data }) => setSculptures(data))
      .catch(console.error);
  }, []);

  return (

    <Container sx={{ pt: 6 }}>
      <Stack spacing={4}>
        <Box sx={{
          width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap',
        }}
        >
          <ImageList
            variant="masonry"
            gap={40}
            sx={{
              columnCount: {
                xs: '1 !important',
                sm: '2 !important',
                md: '3 !important',
              },
            }}
          >
            {sculptures.map(({
              id, title, img, year, dimensions,
            }) => (

              <ImageListStyled
                className="image"
                key={id}
              >
                <img
                  src={`${img}?w=248&fit=crop&auto=format&dpr=2`}
                  alt=""
                  loading="lazy"
                />
                <ImageListItemBar
                  // titleWrap
                  title={(
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: 22,
                        mb: 2,
                        '.css-dasnyc-MuiImageListItemBar-title ': {
                          whiteSpace: 'normal',
                          color: 'red',
                        },
                      }}
                    >
                      {title}
                    </Typography>
                  )}
                  subtitle={(
                    <Typography component="h4" sx={{ fontSize: 12 }}>
                      Year:
                      {' '}
                      {year}
                      .
                      <br />
                      Dimesions:
                      {' '}
                      {dimensions}
                      .
                    </Typography>
                  )}
                  sx={{
                    display: 'flex',
                    alignItems: 'end',
                    height: '100%',
                    transition: lightTheme.transitions.create('opacity', { duration: 1000 }),
                    opacity: 0,
                    ':hover': {
                      opacity: 1,
                    },
                  }}
                />
              </ImageListStyled>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Container>
  );
};

export default GalleryPage;
