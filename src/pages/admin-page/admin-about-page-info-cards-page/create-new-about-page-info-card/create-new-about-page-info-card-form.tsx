import {
  Container, Box, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ButtonScale from '../../../../components/button-scale';
import { createNewCardActionThunk } from '../../../../store/action-creators';
import { useRootDispatch } from '../../../../store/hooks';
import { CreateCard } from '../../../../types';

type CreateConfig = FormikConfig<CreateCard>;

const initialValues: CreateCard = {
  title: '',
  city: '',
  year: '',
  location: '',
  image: '',
};

const validationSchema: Yup.SchemaOf<CreateCard> = Yup.object({
  title: Yup.string()
    .required('This field is Required'),
  city: Yup.string()
    .required('This field is Required'),
  year: Yup.string()
    .matches(/^[0-9]*$/, 'Only numbers is alowed')
    .required('This field is Required'),
  location: Yup.string()
    .required('This field is Required'),
  image: Yup.string()
    .required('This field is Required')
    .matches(/https?:\/\/(www\.)?/, 'Enter correct url'),
});

const CreateNewAboutPageInfoCardForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  const handleSubmitCreateCard: CreateConfig['onSubmit'] = (values) => {
    dispatch(createNewCardActionThunk(values));
    navigate('/admin/infoCard');
  };

  const {
    values, handleSubmit, handleChange, handleBlur, touched, errors,
  } = useFormik<CreateCard>({
    initialValues,
    onSubmit: handleSubmitCreateCard,
    validationSchema,
  });

  return (
    <Container
      sx={{
        py: 10,
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
          Create new card
        </Typography>
        <TextField
          name="title"
          type="text"
          label="Title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.title && errors.title}
        </Typography>

        <TextField
          name="city"
          type="text"
          label="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.city && errors.city}
        </Typography>

        <TextField
          name="year"
          type="text"
          label="Year"
          value={values.year}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.year && errors.year}
        </Typography>

        <TextField
          name="location"
          type="text"
          label="Location"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.location && errors.location}
        </Typography>

        <TextField
          name="image"
          type="text"
          label="Image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.image && errors.image}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <ButtonScale type="submit">Create</ButtonScale>
          <ButtonScale
            type="button"
            onClick={() => navigate('/admin/infoCard')}
          >
            Back
          </ButtonScale>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateNewAboutPageInfoCardForm;
