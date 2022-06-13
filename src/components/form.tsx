import React, { ReactNode } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

import lightTheme from '../styles/theme';
import { useRootDispatch, useRootSelector } from '../store/hooks';
import { selectAuthLoggedIn, selectAuthError } from '../store/selectors';
import { authClearErrorAction } from '../store/action-creators';

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
  btnActive = true,
  onSubmit,
  children,
}) => {
  const dispatch = useRootDispatch();
  const loading = useRootSelector(selectAuthLoggedIn);
  const error = useRootSelector(selectAuthError);
  const clearError = () => {
    dispatch(authClearErrorAction);
  };

  return (
    <Container sx={{ position: 'relative', pt: 15 }}>
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
        {error && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Alert
              variant="outlined"
              sx={{
                mb: 3,
              }}
              color="error"
              onClose={clearError}
            >
              {error}
            </Alert>
          </Box>
        )}
        <Typography
          component="h1"
          variant="h5"
          color="primary.main"
        >
          {formTitle}
        </Typography>
        {children}
        <Button
          type="submit"
          variant="contained"
          endIcon={icon}
          disabled={!btnActive || loading}
          sx={{
            mt: 4,
            backgroundColor: 'grey.900',
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
