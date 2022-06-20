import React from 'react';
import { Container } from '@mui/material';
import ContactPageImage from './contact-page-image';
import ContactPageForm from './contact-page-form';
import ContactPageTitle from './contact-page-title';

const ContactPage = () => (
  <>
    <Container>
      <ContactPageTitle />
    </Container>

    <ContactPageImage>
      <Container>
        <ContactPageForm />
      </Container>
    </ContactPageImage>
  </>
);

export default ContactPage;
