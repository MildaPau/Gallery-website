import React from 'react';
import {
  Box, Container,
} from '@mui/material';
import SectionExibitionsTitle from './section-exibitions-title';
import SectionExbitionCard from './section-exibition-card';

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
        my: 12,
        gap: 3,
      }}
      >
        <SectionExbitionCard />
      </Box>
    </Container>
  </>
);

export default SectionExibitions;
