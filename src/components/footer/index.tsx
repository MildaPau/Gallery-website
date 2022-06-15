import React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FooterLink from './footer-link';

const Footer: React.FC = () => (
  <Box
    position="fixed"
    sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      width: '100%',
      bottom: '0',
      overflow: 'hidden',
      justifyContent: 'start',

    }}
  >

    <Box
      sx={(theme) => theme.mixins.footer}
    >
      <Box sx={{
        display: 'flex',
        height: '100%',
      }}
      >
        <FooterLink href="https://www.instagram.com/sculpture_by_evaldas_pauza/" target="_blank"><InstagramIcon /></FooterLink>
        <FooterLink href="https://www.facebook.com/pg/pauza.evaldas/posts/" target="_blank"><FacebookIcon /></FooterLink>
        <FooterLink sx={{ cursor: 'pointer' }}><MailOutlineIcon /></FooterLink>
      </Box>
    </Box>
  </Box>
);

export default Footer;
