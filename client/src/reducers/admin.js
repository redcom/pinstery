// @flow
import type { AdminType } from '../store/CommonStoreTypes';
import { ADMIN_LOGIN, ADMIN_AUTH } from '../constants/ActionTypes';

const initialState = {
  isAdmin: false,
  isAuth: false,
};

const admin = (state: AdminType = initialState, action: Object) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return { isAdmin: true };
    case ADMIN_AUTH:
      return { isAuth: true };
    default:
      return state;
  }
};

export default admin;
