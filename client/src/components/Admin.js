// @flow

import { ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import { Errors } from '../components';
import Button from 'material-ui/Button';

type Props = {
  admin: Object,
  hasErrors: ErrorsType,
  onAdminAuth: Function,
};

class AdminComponent extends React.PureComponent {
  props: Props;

  render() {
    const { admin, onAdminAuth, hasErrors: error } = this.props;
    return (
      <div>
        {!admin.isAuth &&
          <Button raised color="primary" onClick={onAdminAuth} width="200px">
            Authorize
          </Button>}
        {error &&
          <Errors>
            {error.message}
          </Errors>}
      </div>
    );
  }
}

export default AdminComponent;
