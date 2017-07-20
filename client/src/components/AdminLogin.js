// @flow

import { ErrorsType } from '../store/CommonStoreTypes';

import React from 'react';
import styled from 'styled-components';
import { Button, Errors } from '../components';
import {
  defaultBorderStyle,
  defaultFontSize,
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

    > input {
      padding: ${defaultSpaceBetweenElements};
      font-size: ${defaultFontSize};
      border: ${defaultBorderStyle};
      width: 100%;
    }
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
          Email:
          <input
            type="email"
            value={email}
            onChange={this.onChange}
            required="required"
          />
        </div>
        <div>
          Password:
          <input
            value={password}
            type="password"
            onChange={this.onChange}
            required="required"
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
      </Form>
    );
  }
}

export default AdminLoginComponent;
