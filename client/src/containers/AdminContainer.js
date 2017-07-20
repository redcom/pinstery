// @flow

import type { State, ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { WrapperFlex, Title, Admin, AdminLogin } from '../components';
import { login, auth } from '../actions/AdminActions';

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
  const onAuth = action => dispatch(auth(action));

  const content = !admin.isAdmin
    ? <AdminLogin onSubmit={onLogin} hasErrors={error} />
    : <Admin admin={admin} onAdminAuth={onAuth} hasErrors={error} />;

  console.log(content);

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
