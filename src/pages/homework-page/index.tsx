import React, { useState, useEffect } from 'react';
import {
  Stack, ImageList, ImageListItem as ImageListStyled, Box, Container, ImageListItemBar,
} from '@mui/material';

import axios from 'axios';
import { Sculpture } from '../../types';
import lightTheme from '../../styles/theme';

const HomeworkPage: React.FC = () => {
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
            cols={3}
            gap={20}
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
                  title={(
                    <h3>
                      {title}
                    </h3>
                  )}
                  subtitle={(
                    <h4>
                      Year:
                      {' '}
                      {year}
                      .
                      <br />
                      Dimesions:
                      {' '}
                      {dimensions}
                      .
                    </h4>
                  )}
                  // position="bottom"
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

export default HomeworkPage;
