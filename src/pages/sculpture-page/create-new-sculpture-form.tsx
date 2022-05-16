import {
  Container, Box, TextField, Button, Typography,
} from '@mui/material';
import React from 'react';
// import NavbarLink from '../../components/navbar/navbar-link';
import lightTheme from '../../styles/theme';

const CreateNewSculptureForm: React.FC = () => (
  <Container
    sx={{
      pt: 15,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Box
      component="form"
      sx={{
        maxWidth: 400,
        px: 4,
        py: 3,
        bgcolor: 'formColor.main',
        boxShadow: 2,
      }}
    //   onSubmit={onSubmit}
    >
      <Typography
        component="h1"
        variant="h5"
        color="primary.main"
      >
        Create new sculpture
      </Typography>
      <TextField
        type="text"
        label="Title"
        variant="outlined"
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button
        type="submit"
        variant="contained"
        // onClick={() => createNewItem()}
        sx={{
          mt: 4,
          backgroundColor: 'grey.900',
          px: 3,
          opacity: 0.9,
          transition: lightTheme.transitions.create('transform', {
            duration: '0.5s',
          }),
          ':hover': {
            opacity: 1,
            transform: 'scale(1.1)',
            backgroundColor: 'primary.main',
          },
        }}
      >
        Create
      </Button>
    </Box>
  </Container>

);

export default CreateNewSculptureForm;

/* <Box component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box sx={{ textAlign: 'center' }}>

        <Form
            formTitle="Create new sculpture"
            submitText="Create"
        >
            <TextField
                type="text"
                label="Title"
                variant="outlined"
                fullWidth
                sx={{ mt: 3 }}
            />
            <Button variant="outlined">
                <NavbarLink
                    to="/sculpture"
                >
                    Back
                </NavbarLink>
            </Button>
        </Form>
    </Box>
</Box> */