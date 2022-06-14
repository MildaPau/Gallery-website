import React from 'react';
import { Box, Typography } from '@mui/material';

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
      <Typography component="h2" variant="h3" sx={{ mb: 3 }}>SCULPTOR</Typography>
      <Typography
        sx={{
          fontSize: { sm: 19, md: 24 },
        }}
      >
        Evaldas Pauza gimė 1966 10 27 Kaune. 1982-86 m. studijavo S. Žuko taikomosios dailės technikume Kaune, 1989-95 m. - Vilniaus dailės akademijoje ir įgijo skulptoriaus specialybę. 1996-2000 m. dirbo parodų architektu Nacionaliniame M.K.Čiurlionio dailės muziejuje. Nuo 1996 m. dėsto VDA Kauno dailės institute, skulptūros studijoje. Nuo 2000 m. - Lietuvos dailininkų sąjungos narys. Parodose dalyvauja nuo 1994 m., dirba skulptūros srityje.

      </Typography>
    </Box>
    <Box>
      <Box
        component="img"
        src="about-page-sculptor-foto.jpg"
        sx={{
          maxWidth: { xs: 250, sm: 300, md: 370 },
          mb: 10,
        }}
      />
    </Box>
  </Box>
);

export default SectionAboutSculptor;
