import React, { useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField, Box } from '@mui/material';

import AuthContext from '../../features/auth/auth-context';
import Form from '../../components/form';

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nextPage = searchParams.get('next') ?? '/';
    login(nextPage);
  };

  return (

    <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Form
          formTitle="Login"
          submitText="Login"
          onSubmit={handleSubmit}
        >
          <TextField
            type="email"
            label="Email"
            variant="standard"
            fullWidth
            sx={{ mt: 3 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            fullWidth
            sx={{ mt: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
      </Box>
    </Box>

  );
};

export default LoginPage;
