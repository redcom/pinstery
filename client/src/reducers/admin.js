// @flow
import type { AdminType } from '../store/CommonStoreTypes';
import { ADMIN_LOGIN, ADMIN_GET_IMAGES } from '../constants/ActionTypes';

const initialState = {
  isAdmin: false,
  isAuth: false,
  url: '',
  token: null,
};

const admin = (state: AdminType = initialState, action: Object) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        isAdmin: true,
        url: action.url,
        isAuth: false,
        token: action.token,
      };
    case ADMIN_GET_IMAGES:
      return { ...state, images: action.images };
    default:
      return state;
  }
};

export default admin;
