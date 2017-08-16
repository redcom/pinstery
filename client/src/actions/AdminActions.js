// @flow

import {
  apiLogin,
  apiLoadImages,
  apiAddProduct,
  apiLoadCategories,
} from '../helpers/adminApi';
import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_FAILED,
  ADMIN_GET_IMAGES,
  ADMIN_GET_IMAGES_FAILED,
  ADMIN_GET_CATEGORIES,
  ADMIN_GET_CATEGORIES_FAILED,
  ADMIN_ADD_PRODUCT,
  ADMIN_ADD_PRODUCT_FAILED,
} from '../constants/ActionTypes';

export const adminGetImageFailed = (error: ErrorsType): Object => ({
  type: ADMIN_GET_IMAGES_FAILED,
  error,
});
export const adminGetCategoriesFailed = (error: ErrorsType): Object => ({
  type: ADMIN_GET_CATEGORIES_FAILED,
  error,
});
export const adminLoginFailed = (error: ErrorsType): Object => ({
  type: ADMIN_LOGIN_FAILED,
  error,
});
export const adminAddProductFailed = (error: ErrorsType): Object => ({
  type: ADMIN_ADD_PRODUCT_FAILED,
  error,
});

export const addProduct = (product: Object): Function => async dispatch => {
  try {
    const response = await apiAddProduct(product)();
    return dispatch({
      type: ADMIN_ADD_PRODUCT,
      ...response,
    });
  } catch (error) {
    return dispatch(adminAddProductFailed(error));
  }
};
export const login = ({
  email,
  password,
}: {
  email: string,
  password: string,
}): Function => async dispatch => {
  try {
    const credentials = JSON.parse(localStorage.getItem('auth'));
    if (credentials && credentials.isAdmin && credentials.token) {
      return dispatch({
        type: ADMIN_LOGIN,
        ...credentials,
      });
    }
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

export const loadCategories = ({
  email,
  token,
}: {
  email: string,
  token: string,
}): Function => async dispatch => {
  try {
    const categories = await apiLoadCategories({ email, token })();
    return dispatch({
      type: ADMIN_GET_CATEGORIES,
      categories,
    });
  } catch (error) {
    return dispatch(adminGetCategoriesFailed(error));
  }
};
