import {
  Container, Box, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonScale from '../../components/button-scale';
import { createNewSculptureAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';
import { CreateSculpture } from '../../types/create-sculpture';

const CreateNewSculptureForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  type CreateConfig = FormikConfig<CreateSculpture>;

  const initialValues: CreateSculpture = {
    img: '',
    title: '',
    year: '',
    dimensions: '',
  };

  const handleSubmitCreateSculpture: CreateConfig['onSubmit'] = ({
    title, year, dimensions, img,
  }) => {
    dispatch(createNewSculptureAction({
      title, year, dimensions, img,
    }));
    navigate('/admin');
  };

  const {
    values, handleSubmit, handleChange,
  } = useFormik<CreateSculpture>({
    initialValues,
    onSubmit: handleSubmitCreateSculpture,
  });

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
        onSubmit={handleSubmit}
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
          name="title"
          type="text"
          label="Title"
          value={values.title}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <TextField
          name="year"
          type="text"
          label="Year"
          value={values.year}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <TextField
          name="dimensions"
          type="text"
          label="Dimensions"
          value={values.dimensions}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <TextField
          name="img"
          type="text"
          label="Image"
          value={values.img}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <ButtonScale type="submit">Create</ButtonScale>
          <ButtonScale
            type="button"
            onClick={() => navigate('/admin')}
          >
            Back
          </ButtonScale>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateNewSculptureForm;
