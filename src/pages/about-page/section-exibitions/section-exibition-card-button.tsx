import { Button, styled } from '@mui/material';
import React from 'react';

const SectionExibitiobCardButton: React.FC = styled(Button)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  borderRadius: 0,
  borderTop: `1px solid ${theme.palette.primary.main}`,
  transition: theme.transitions.create('justifyContent', {
    duration: '1s',
  }),
  ':hover': {
    justifyContent: 'space-between',
    background: theme.palette.neon.main,
  },
}));

export default SectionExibitiobCardButton;
