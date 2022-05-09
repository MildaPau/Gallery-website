import React, { ReactNode, useContext } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

import lightTheme from '../styles/theme';
import AuthContext from '../features/auth/auth-context';

type FormProps = {
  formTitle: string,
  submitText: string,
  icon?: ReactNode,
  btnActive?: boolean,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const contentWidth = 300;

const Form: React.FC<FormProps> = ({
  formTitle,
  submitText,
  icon,
  btnActive,
  onSubmit,
  children,
}) => {
  const { error, clearError } = useContext(AuthContext);

  return (
    <Container sx={{ position: 'relative', pt: 15 }}>
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              position: 'absolute',
              top: 0,
              minWidth: contentWidth,
              mt: 6,
            }}
            color="error"
            onClose={clearError}
          >
            {error}
          </Alert>
        </Box>
      )}
      <Box
        component="form"
        sx={{
          maxWidth: contentWidth,
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
          disabled={!btnActive}
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
};

export default Form;
