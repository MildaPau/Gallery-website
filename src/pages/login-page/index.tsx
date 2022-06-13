import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField, Box } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';

import Form from '../../components/form';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectAuthLoading } from '../../store/selectors';
import { createLoginActionThunk } from '../../store/action-creators';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema: Yup.SchemaOf<LoginValues> = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(32, 'Must be 32 character or less'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(32, 'Must be 32 character or less')
    .matches(/[A-ZĄČĘĖĮŠŲŪŽ]/, 'Upper case letter required.')
    .matches(/[A-Ząčęėįšųūž]/, 'Lower case letter required.')
    .matches(/\d/, 'Number is required'),
});

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const redirect = searchParams.get('redirect') ?? '/admin';
    const loginAction = createLoginActionThunk({ email, password }, redirect);
    dispatch(loginAction);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (

    <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Form
          formTitle="Login"
          submitText="Login"
          btnActive={dirty && isValid}
          onSubmit={handleSubmit}
        >
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="standard"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={loading}
            sx={{ mt: 3 }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="standard"
            fullWidth
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={loading}
            sx={{ mt: 3 }}
          />
        </Form>
      </Box>
    </Box>

  );
};

export default LoginPage;
