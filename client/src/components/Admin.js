// @flow

import { ErrorsType } from '../store/CommonStoreTypes';

import React from 'react';
import { Button, Errors } from '../components';

type Props = {
  admin: Object,
  hasErrors: ErrorsType,
  onAdminAuth: Function,
};

class AdminComponent extends React.Component {
  props: Props;

  render() {
    const { admin, onAdminAuth, hasErrors: error } = this.props;
    console.log(admin);
    return (
      <div>
        {!admin.isAuth &&
          <Button onClick={onAdminAuth} width="200px">
            Authorize
          </Button>}
        {error &&
          <Errors>
            {' '} {error.message} {' '}
          </Errors>}
      </div>
    );
  }
}

export default AdminComponent;
