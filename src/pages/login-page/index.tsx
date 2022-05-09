import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField, Box } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../../features/auth/auth-context';
import Form from '../../components/form';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .min(6, 'Min 6 symbols')
    .max(32, 'Max 32 symbols')
    .email('Enter a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Min 8 symbols')
    .max(32, 'Max 32 symbols')
    .matches(/[A-ZĄČĘĖĮŠŲŪŽ]/, 'Upper case letter required')
    .matches(/[a-ząčęėįšųūž]/, 'Lower case letter required')
    .matches(/\d/, 'Number is required'),
});

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useContext(AuthContext);

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const nextPage = searchParams.get('next') ?? '/';
    login({ email, password }, nextPage);
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
      <pre style={{
        position: 'fixed', top: 300, left: 50, fontSize: 20,
      }}
      >
        {JSON.stringify({
          isValid, dirty, values, touched, errors,
        }, null, 4)}
      </pre>
      <Box sx={{ textAlign: 'center' }}>
        <Form
          formTitle="Login"
          submitText="Login"
          onSubmit={handleSubmit}
          btnActive={dirty && isValid}
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
            sx={{ mt: 3 }}
          />
        </Form>
      </Box>
    </Box>

  );
};

export default LoginPage;
