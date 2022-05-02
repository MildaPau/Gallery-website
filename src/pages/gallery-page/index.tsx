import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from '@mui/material';

import axios from 'axios';
import Sculpture from '../../types/sculpture';
import SculptureCard from './sculpture-card';

const GaleryPage: React.FC = () => {
  const [sculptures, setSculptures] = useState<Sculpture[]>([]);

  useEffect(() => {
    axios.get<Sculpture[]>('http://localhost:8000/sculptures')
      .then(({ data }) => setSculptures(data))
      .catch(console.error);
  }, []);

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box
        component="section"
        gap={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'Wrap',
          py: 8,
        }}
      >
        {sculptures.map(({ id, ...SculptureProps }) => (
          <Grid key={id} item xs={12} lg={4}>
            <SculptureCard {...SculptureProps} />
          </Grid>
        ))}
      </Box>
      <Box />
    </Container>
  );
};

export default GaleryPage;
