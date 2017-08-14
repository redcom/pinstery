// @flow

import { ErrorsType } from '../store/CommonStoreTypes';

import React from 'react';
import styled from 'styled-components';
import { Errors } from '../components';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {
  defaultSpaceBetweenElements,
  defaultSpaceAroundElements,
} from '../styles/vars';

const WrapActions = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    align-self: flex-end;
  }
`;

const Form = styled.form`
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
class AdminLoginComponent extends React.Component {
  props: Props;

  state = {
    email: undefined,
    password: undefined,
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  };

  onChange = evt => {
    if (evt.target.type === 'email') {
      this.setState({
        email: evt.target.value.trim(),
      });
    }
    if (evt.target.type === 'password') {
      this.setState({
        password: evt.target.value.trim(),
      });
    }
  };

  render() {
    const { email, password } = this.state;
    const { hasErrors: { error } } = this.props;
    return (
      <Form onSubmit={this.submitForm}>
        <div>
          <TextField
            required
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.onChange}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            required
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <WrapActions>
          {error
            ? <Errors>
                {' '}{error.message}{' '}
              </Errors>
            : <div />}
          <Button raised color="primary" onClick={this.submitForm} width="auto">
            Send
          </Button>
        </WrapActions>
      </Form>
    );
  }
}

export default AdminLoginComponent;
