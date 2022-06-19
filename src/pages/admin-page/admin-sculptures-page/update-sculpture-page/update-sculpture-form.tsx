import {
  Container, Box, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import ButtonScale from '../../../../components/button-scale';
import { createfetchSculpturesAction, createUpdateSculptureAction } from '../../../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../../../store/hooks';
import { Sculpture } from '../../../../types';
import { selectSculptureById, selectSculpturesLoading } from '../../../../store/features/sculptures/sculpture-selectors';

type CreateConfig = FormikConfig<Sculpture>;

const validationSchema = Yup.object({
  title: Yup.string()
    .required('This field is Required'),
  year: Yup.string()
    .matches(/^[0-9]*$/, 'Only numbers is alowed')
    .required('This field is Required'),
  dimensions: Yup.string()
    .required('This field is Required'),
  image: Yup.string()
    .required('This field is Required')
    .matches(/https?:\/\/(www\.)?/, 'Enter correct url'),
});

const UpdateSculptureForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const sculpture = useRootSelector(selectSculptureById(id));
  const loading = useRootSelector(selectSculpturesLoading);
  const [hasPrefilled, setHasPrefilled] = useState(!!sculpture);

  const initialValues = sculpture || {
    id: '',
    image: '',
    title: '',
    year: '',
    dimensions: '',
  };

  const handleSubmitUpdateSculpture: CreateConfig['onSubmit'] = (values) => {
    dispatch(createUpdateSculptureAction(values));
    navigate('/admin/sculptures');
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setValues,
  } = useFormik<Sculpture>({
    initialValues,
    onSubmit: handleSubmitUpdateSculpture,
    validationSchema,
  });

  useEffect(() => {
    if (!loading && !hasPrefilled) {
      if (sculpture) { setValues(sculpture); }
      setHasPrefilled(true);
    }
  }, [loading, sculpture]);

  useEffect(() => {
    dispatch(createfetchSculpturesAction);
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
          Update sculpture
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
          name="dimensions"
          type="text"
          label="Dimensions"
          value={values.dimensions}
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
          {touched.dimensions && errors.dimensions}
        </Typography>

        {/* <TextField
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
        </Typography> */}

        <TextField
          name="image"
          type="url"
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
            onClick={() => navigate('/admin/sculptures')}
          >
            Back
          </ButtonScale>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdateSculptureForm;
