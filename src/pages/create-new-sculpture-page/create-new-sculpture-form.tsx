import {
  Container, Box, TextField, Button, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import lightTheme from '../../styles/theme';

type CreateNewSculptureFormProps = {
  createNewItem: () => void,
};

const CreateNewSculptureForm: React.FC<CreateNewSculptureFormProps> = ({
  createNewItem,
}) => {
  const navigate = useNavigate();

  const create = () => {
    createNewItem();
    navigate('/admin');
  };

  return (
    <Container
      sx={{
        pt: 15,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="form"
        sx={{
          maxWidth: 400,
          px: 4,
          py: 3,
          bgcolor: 'formColor.main',
          boxShadow: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="primary.main"
        >
          Create new sculpture
        </Typography>
        <TextField
          type="text"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={create}
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
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default CreateNewSculptureForm;
