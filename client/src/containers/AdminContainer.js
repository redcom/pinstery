// @flow

import type { State, ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { WrapperFlex, Title, Admin, AdminLogin } from '../components';
import { login } from '../actions/AdminActions';

const AdminContainer = ({
  error = null,
  admin,
  dispatch,
}: {
  error: ErrorsType,
  admin: Object,
  dispatch: Function,
}) => {
  const onLogin = action => dispatch(login(action));
  const onAuth = action => {
    window.a = window.open(
      admin.url,
      'Auth',
      'top=100,left=100,width=700,height=500',
    );
  };

  const content = !admin.isAdmin
    ? <AdminLogin onSubmit={onLogin} hasErrors={error} />
    : <Admin admin={admin} onAdminAuth={onAuth} hasErrors={error} />;

  return (
    <WrapperFlex>
      <Title>Admin</Title>
      {content}
    </WrapperFlex>
  );
};

export default connect((state: State) => ({
  admin: state.admin,
  error: state.error,
}))(AdminContainer);
