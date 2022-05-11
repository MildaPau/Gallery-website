import React from 'react';
import {
  Box, Container, Paper, Typography,
} from '@mui/material';
import SculpturePageCard from './sculpture-page-card';
import useRootSelector from '../../store/hooks';

const SculpturePage: React.FC = () => {
  const sculptures = useRootSelector((state) => state.sculptures);
  return (
    <Container sx={{ mt: 6 }}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 6,
        }}
      >
        Gallery / Shop
      </Typography>
      <Box component="section" sx={{ display: 'flex', gap: 5 }}>
        {
          sculptures.map(({
            id, ...SculptureProps
          }) => (
            <Paper key={id} sx={{ maxWidth: 350 }}>
              <SculpturePageCard {...SculptureProps} />
            </Paper>
          ))
        }
      </Box>
    </Container>
  );
};

export default SculpturePage;

// <div>
//   {sculptures
//     ? JSON.stringify(sculptures, null, 2)
//     : 'Planas nepasirinktas'}
// </div>
