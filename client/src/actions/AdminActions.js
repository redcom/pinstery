// @flow

import { apiLogin, apiAuth } from '../helpers/adminApi';
import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_FAILED,
  ADMIN_AUTH,
  ADMIN_AUTH_FAILED,
} from '../constants/ActionTypes';

export const adminAuthFailed = (error: ErrorsType): Object => ({
  type: ADMIN_AUTH_FAILED,
  error,
});
export const adminLoginFailed = (error: ErrorsType): Object => ({
  type: ADMIN_LOGIN_FAILED,
  error,
});

export const login = ({
  email,
  password,
}: {
  email: string,
  password: string,
}): Function => async dispatch => {
  try {
    const loginResponse = await apiLogin({ email, password })();
    return dispatch({
      type: ADMIN_LOGIN,
      ...loginResponse,
    });
  } catch (error) {
    return dispatch(adminLoginFailed(error));
  }
};

export const auth = (): Function => async dispatch => {
  try {
    const authResponse = await apiAuth()();
    return dispatch({
      type: ADMIN_AUTH,
      authResponse,
    });
  } catch (error) {
    return dispatch(adminAuthFailed(error));
  }
};
