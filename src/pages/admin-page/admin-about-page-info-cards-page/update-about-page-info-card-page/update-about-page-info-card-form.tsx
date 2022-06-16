import {
  Container, Box, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import ButtonScale from '../../../../components/button-scale';
import { createfetchCardsActionThunk, createUpdateCardActionThunk } from '../../../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../../../store/hooks';
import { selectCardById, selectCardsLoading } from '../../../../store/selectors';
import { Card } from '../../../../types';

type CreateConfig = FormikConfig<Card>;

const validationSchema = Yup.object({
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

const UpdateCardForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const card = useRootSelector(selectCardById(id));
  const loading = useRootSelector(selectCardsLoading);
  const [hasPrefilled, setHasPrefilled] = useState(!!card);

  const initialValues = card || {
    id: '',
    title: '',
    city: '',
    year: '',
    location: '',
    image: '',
  };

  const handleSubmitUpdateCard: CreateConfig['onSubmit'] = (values) => {
    dispatch(createUpdateCardActionThunk(values));
    navigate('/admin/infoCard');
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setValues,
  } = useFormik<Card>({
    initialValues,
    onSubmit: handleSubmitUpdateCard,
    validationSchema,
  });

  useEffect(() => {
    if (!loading && !hasPrefilled) {
      if (card) { setValues(card); }
      setHasPrefilled(true);
    }
  }, [loading, card]);

  useEffect(() => {
    dispatch(createfetchCardsActionThunk);
  }, []);

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
          Update card
        </Typography>
        <TextField
          name="id"
          type="text"
          label="Sculpture ID"
          value={values.id}
          variant="outlined"
          fullWidth
          disabled
          sx={{ mt: 3 }}
        />
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
          label="City"
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
          <ButtonScale type="submit">Update</ButtonScale>
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

export default UpdateCardForm;
