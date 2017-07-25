// @flow

import { ErrorsType } from '../store/CommonStoreTypes';

import React from 'react';
import {
  defaultBorderStyle,
  defaultFontSize,
  defaultSpaceBetweenElements,
  defaultSpaceAroundElements,
} from '../styles/vars';

import styled from 'styled-components';
import { Button, Errors, Label, WrapActions } from '../components';

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
`;

type Props = {
  onSubmit: Function,
  hasErrors: ErrorsType,
};

class ContactFormComponent extends React.Component {
  props: Props;

  state = {
    focusEmail: false,
    focusMessage: false,
    email: '',
    message: '',
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      message: this.state.message,
    });
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
    const { hasErrors: { error } } = this.props;
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
        <WrapActions>
          {error
            ? <Errors>
                {' '}{error.message}{' '}
              </Errors>
            : <div />}
          <Button onClick={this.submitForm} width="auto">
            {' '}Send{' '}
          </Button>
        </WrapActions>
      </ContactForm>
    );
  }
}

export default ContactFormComponent;
