import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

import Form from '../../components/form';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repPassword, setRepPassword] = useState<string>('');

  return (
    <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Form
          formTitle="Register"
          submitText="Register"
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
            value={repPassword}
            onChange={(e) => setRepPassword(e.target.value)}
          />
        </Form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
