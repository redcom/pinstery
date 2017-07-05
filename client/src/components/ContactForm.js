// @flow

import React from 'react';
import {
  defaultBorderStyle,
  defaultFontSize,
  defaultSpaceBetweenElements,
  defaultSpaceAroundElements,
  defaultFontLabel,
} from '../styles/vars';

import styled from 'styled-components';
import { Button } from '../components';

// Styled component used bellow
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: ${defaultSpaceBetweenElements};
  > div {
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
  }
`;

const Label = styled.label`
  padding: ${defaultSpaceBetweenElements};
  font-size: ${defaultFontSize};
  font-weight: bold;
  width: 15%;
  transition: 0.3s;
  position: absolute;
  &.focus {
    margin-left: -100px;
    font-size: ${defaultFontLabel};
  }
`;

type Props = {
  onSubmit: Function,
};

class ContactFormComponent extends React.Component {
  props: Props;
  email = undefined;
  message = undefined;

  state = {
    focusEmail: false,
    focusMessage: false,
    email: '',
    message: '',
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit({ email: this.email, message: this.message });
  };

  onChange = evt => {
    if (evt.target.type === 'email') {
      this.setState({
        email: evt.target.value.trim(),
      });
    }
    if (evt.target.type === 'textarea') {
      this.setState({
        message: evt.target.value.trim(),
      });
    }
  };

  onFocus = evt => {
    this.setState({
      focusEmail: evt.target.type === 'email' || this.state.email.length,
      focusMessage: evt.target.type === 'textarea' || this.state.message.length,
    });
  };

  onBlur = evt => {
    if (evt.target.type === 'email' && this.state.email.length) {
      this.setState({
        focusEmail: true,
      });
    }
    if (evt.target.type === 'textarea' && this.state.message.length) {
      this.setState({
        focusMessage: true,
      });
    }
  };

  render() {
    const { email, message } = this.state;

    return (
      <ContactForm onSubmit={this.submitForm}>
        <div>
          <Label
            htmlFor="email"
            className={`${this.state.focusEmail ? 'focus' : ''}`}
          >
            Email:
          </Label>
          <input
            value={email}
            id="email"
            type="email"
            required="required"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
        <div>
          <Label
            htmlFor="message"
            className={`${this.state.focusMessage ? 'focus' : ''}`}
          >
            Message:
          </Label>
          <textarea
            value={message}
            id="message"
            required="required"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
        <Button onClick={this.submitForm} width="auto">
          Send
        </Button>
      </ContactForm>
    );
  }
}

export default ContactFormComponent;
