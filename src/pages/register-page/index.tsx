import React, { useState, useContext } from 'react';
import { TextField, Box } from '@mui/material';

import Form from '../../components/form';
import AuthContext from '../../features/auth/auth-context';

const RegisterPage: React.FC = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const handleRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    register({ email, password, repeatPassword });
  };

  return (
    <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Form
          formTitle="Register"
          submitText="Register"
          onSubmit={handleRegister}
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
          <TextField
            type="password"
            label="Repeat password"
            variant="standard"
            fullWidth
            sx={{ mt: 3 }}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </Form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
