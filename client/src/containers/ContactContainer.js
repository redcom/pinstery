import React from 'react';
import { ErrorContainer } from '../containers';
import { Wrapper, Title, ContactForm } from '../components';

const WrapperFlex = Wrapper.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactContainer = () =>
  <div className="contact">
    <WrapperFlex>
      <Title>Contact</Title>
      <ContactForm />
      <ErrorContainer />
    </WrapperFlex>
  </div>;

export default ContactContainer;
