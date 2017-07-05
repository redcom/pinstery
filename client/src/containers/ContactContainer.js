// @flow

import type { State, ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { WrapperFlex, Title, ContactForm } from '../components';
import { sendContactMessage } from '../actions/ContactActions';

const ContactContainer = ({
  error = null,
  dispatch,
}: {
  error: ErrorsType,
  dispatch: Function,
}) => {
  const onSubmit = ({ email, message }) =>
    dispatch(sendContactMessage({ email, message }));

  return (
    <WrapperFlex>
      <Title>Contact</Title>
      <ContactForm onSubmit={onSubmit} hasErrors={error} />
    </WrapperFlex>
  );
};

export default connect((state: State) => ({
  error: state.error,
}))(ContactContainer);
