import {
  Container, Box, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ButtonScale from '../../../../components/button-scale';
import { createNewSculptureActionThunk } from '../../../../store/action-creators';
import { useRootDispatch } from '../../../../store/hooks';
import { CreateSculpture } from '../../../../types';

type CreateConfig = FormikConfig<CreateSculpture>;

const initialValues: CreateSculpture = {
  title: '',
  year: '',
  dimensions: '',
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required('This field is Required'),
  year: Yup.string()
    .matches(/^[0-9]*$/, 'Only numbers is alowed')
    .required('This field is Required'),
  dimensions: Yup.string()
    .required('This field is Required'),
});

const CreateNewSculptureForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const imageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmitCreateSculpture: CreateConfig['onSubmit'] = (values) => {
    if (Object.keys(values).length > 0) {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.set(key, value);
      });

      if (imageFieldRef?.current?.files && imageFieldRef.current.files[0]) {
        const imgFile = imageFieldRef.current?.files[0] as File;
        formData.set('image', imgFile);
      }

      dispatch(createNewSculptureActionThunk(formData));
      navigate('/admin/sculptures');
    }
  };

  const {
    values, handleSubmit, handleChange, handleBlur, touched, errors,
  } = useFormik<CreateSculpture>({
    initialValues,
    onSubmit: handleSubmitCreateSculpture,
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
          Create new sculpture
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

        <TextField
          name="image"
          type="file"
          label="Image"
          variant="outlined"
          fullWidth
          inputRef={imageFieldRef}
          sx={{ mt: 3 }}
          inputProps={{
            accept: 'image/png, image/jpeg',
          }}
          InputLabelProps={{
            shrink: true,
          }}
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
            onClick={() => navigate('/admin/sculptures')}
          >
            Back
          </ButtonScale>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateNewSculptureForm;
