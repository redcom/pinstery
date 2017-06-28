// @flow

import React from 'react';
import {
  defaultBorderStyle,
  defaultFontSize,
  defaultSpaceBetweenElements,
  defaultSpaceAroundElements,
} from '../styles/vars';

import styled from 'styled-components';
import { Button } from '../components';

// Styled component used bellow
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${defaultSpaceBetweenElements};
  > div {
    display:flex;
    flex-direction: row;
    padding: ${defaultSpaceAroundElements};

    > input[type='email'] {
      padding: ${defaultSpaceBetweenElements};
      font-size: ${defaultFontSize};
      border: ${defaultBorderStyle};
      width: 100%;
    }
    > textarea {
      padding: ${defaultSpaceBetweenElements};
      font-size: ${defaultFontSize};
      border: ${defaultBorderStyle};
      width: 100%;
      height: 10em;
    }
  }
  > button {
    align-self: flex-end;
    margin

  }
`;

const Label = styled.label`
  padding: ${defaultSpaceBetweenElements};
  font-size: ${defaultFontSize};
  font-weight: bold;
  width: 15%;
`;

const ContactFormComponent = ({ onAddUrl }: { onAddUrl: Function }) => {
  let email;
  let message;

  const submitForm = evt => {
    evt.preventDefault();
    onAddUrl(email.value);
    email.value = null;
  };

  const onChange = evt => {
    if (evt.target.type === 'email') {
      email = evt.target.value;
    }
    if (evt.target.type === 'textarea') {
      console.log(evt.target.value);
      message = evt.target.value;
    }
  };

  return (
    <ContactForm onSubmit={submitForm}>
      <div>
        <Label htmlFor="email">Email:</Label>
        <input
          value={email}
          id="email"
          type="email"
          required="required"
          placeholder="example@example.com"
          onChange={onChange}
        />
      </div>
      <div>
        <Label htmlFor="message">Message:</Label>
        <textarea
          value={message}
          id="message"
          required="required"
          onChange={onChange}
          placeholder="Write your message here"
        />
      </div>
      <Button onClick={submitForm}>
        Send
      </Button>
    </ContactForm>
  );
};

export default ContactFormComponent;
