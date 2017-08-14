// @flow

import { ErrorsType } from '../store/CommonStoreTypes';

import React from 'react';
import {
  defaultSpaceBetweenElements,
  defaultSpaceAroundElements,
} from '../styles/vars';

import styled from 'styled-components';
import { Errors, WrapActions, Button } from '../components';
import TextField from 'material-ui/TextField';


// Styled component used bellow
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: ${defaultSpaceBetweenElements};
  > div {
    padding: ${defaultSpaceAroundElements};
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
        message: evt.target.value,
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
        <TextField
          required
          id="email"
          label="Email"
          value={email}
          onChange={this.onChange}
          onFocus={this.onFocus}
          margin="normal"
        />
        </div>
        <div>
        <TextField
          label="Message"
          required
          multiline
          rowsMax="4"
          value={message}
          id="message"
          onChange={this.onChange}
          margin="normal"
        />
        </div>
        <WrapActions>
          {error
            ? <Errors>
                {' '}{error.message}{' '}
              </Errors>
            : <div />}
          <Button raised onClick={this.submitForm}>Send</Button>
        </WrapActions>
      </ContactForm>
    );
  }
}

export default ContactFormComponent;
