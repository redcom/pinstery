import React from 'react';
import { ErrorContainer } from '../containers';
import { Wrapper, Title, ContactForm } from '../components';

const ContactContainer = () => (
  <div className="contact">
    <Wrapper>
      <Title>Contact</Title>
      <ContactForm />
      <ErrorContainer />
    </Wrapper>
  </div>
);

export default ContactContainer;
