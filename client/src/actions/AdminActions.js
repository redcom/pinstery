// @flow

import { apiLogin, apiLoadImages } from '../helpers/adminApi';
import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_FAILED,
  ADMIN_GET_IMAGES,
  ADMIN_GET_IMAGES_FAILED,
} from '../constants/ActionTypes';

export const adminGetImageFailed = (error: ErrorsType): Object => ({
  type: ADMIN_GET_IMAGES_FAILED,
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

export const loadImages = ({
  email,
  token,
}: {
  email: string,
  token: string,
}): Function => async dispatch => {
  try {
    const loadImagesResponse = await apiLoadImages({ email, token })();
    return dispatch({
      type: ADMIN_GET_IMAGES,
      images: loadImagesResponse,
    });
  } catch (error) {
    return dispatch(adminGetImageFailed(error));
  }
};
