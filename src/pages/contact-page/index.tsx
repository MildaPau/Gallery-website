import React from 'react';
import {
  Container,
  TextField,
  Box,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ContactMainSection from './contact-main-section';
import Form from '../../components/form';

const ContactPage = () => (
  <Container>
    <ContactMainSection>
      <Box component="section" sx={{ display: 'flex', justifyContent: 'end' }}>
        <Box>
          <Form
            formTitle="Send me a message"
            submitText="Send"
            icon={<SendIcon />}
          >

            <TextField
              type="email"
              label="Email"
              variant="standard"
              fullWidth
              sx={{ mt: 3 }}
            />
            <TextField
              type="title"
              label="Phone number"
              variant="standard"
              fullWidth
              sx={{ mt: 3 }}
            />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={3}
              variant="standard"
              fullWidth
              sx={{
                mt: 2,
              }}
            />
          </Form>
        </Box>
      </Box>
    </ContactMainSection>

  </Container>
);

export default ContactPage;
