import React, { ReactNode } from 'react';
import {
  Alert,
  Box,
  Container,
  Typography,
} from '@mui/material';

import { useRootDispatch, useRootSelector } from '../store/hooks';
import { selectAuthLoggedIn, selectAuthError } from '../store/selectors';
import { authClearErrorAction } from '../store/action-creators';
import ButtonScale from './button-scale';

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
        <ButtonScale
          type="submit"
          endIcon={icon}
          disabled={!btnActive || loading}
        >
          {submitText}
        </ButtonScale>
      </Box>
    </Container>
  );
};

export default Form;
