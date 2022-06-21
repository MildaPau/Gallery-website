import React from 'react';
import { Box, Typography } from '@mui/material';
import lightTheme from '../../../styles/theme';

const SectionAboutSculptor: React.FC = () => (
  <Box
    component="section"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4,
      pt: 3,
      pb: 9,
    }}
  >
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'end', textAlign: 'left',
    }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{ mb: 3, color: lightTheme.palette.primary.main }}
      >
        SCULPTOR
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: 19, md: 24 },
        }}
      >
        Evaldas Pauza was born on October 27, 1966 in Kaunas. 1982-86 studied at S. Žukas Technical School of Applied Arts in Kaunas, 1989-95. - Vilnius Academy of Arts and acquired the specialty of sculptor. 1996-2000 worked as an exhibition architect at the M. M. Čiurlionis National Museum of Art. Since 1996 teaches at the Kaunas Art Institute of the Vilnius Academy of Arts, sculpture studio. Since 2000 - Member of the Lithuanian Artists` Union. Participates in exhibitions since 1994, works in the field of sculpture.

      </Typography>
    </Box>
    <Box>
      <Box
        component="img"
        src="about-page-image.jpg"
        sx={{
          maxWidth: { xs: 250, sm: 300, md: 370 },
          mb: 10,
        }}
      />
    </Box>
  </Box>
);

export default SectionAboutSculptor;
