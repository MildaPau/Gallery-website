import React, { ReactNode } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

import lightTheme from '../styles/theme';

type FormProps = {
  formTitle: string,
  submitText: string,
  icon?: ReactNode,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const Form: React.FC<FormProps> = ({
  formTitle,
  submitText,
  icon,
  onSubmit,
  children,
}) => (
  <Container sx={{ pt: 10 }}>
    <Box
      component="form"
      sx={{
        maxWidth: '300px',
        px: 4,
        py: 3,
        bgcolor: 'formColor.main',
        boxShadow: 2,
      }}
      onSubmit={onSubmit}
    >
      <Typography component="h1" variant="h5" color="primary.main">{formTitle}</Typography>
      {children}
      <Button
        type="submit"
        variant="contained"
        endIcon={icon}
        sx={{
          mt: 4,
          backgroundColor: 'primary.main',
          px: 3,
          opacity: 0.9,
          transition: lightTheme.transitions.create('transform', {
            duration: '0.5s',
          }),
          ':hover': {
            opacity: 1,
            transform: 'scale(1.1)',
            backgroundColor: 'primary.main',
          },
        }}
      >
        {submitText}
      </Button>
    </Box>
  </Container>
);

export default Form;
