// @flow
import type { AdminType } from '../store/CommonStoreTypes';
import { ADMIN_LOGIN, ADMIN_AUTH } from '../constants/ActionTypes';

const initialState = {
  isAdmin: false,
  isAuth: false,
  url: '',
};

const admin = (state: AdminType = initialState, action: Object) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return { isAdmin: true, url: action.url, isAuth: false };
    case ADMIN_AUTH:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export default admin;
