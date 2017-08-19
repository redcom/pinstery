// @flow
import type { ErrorsType } from '../store/CommonStoreTypes';

import {
  ADD_CART_ITEM_FAILED,
  REMOVE_CART_ITEM_FAILED,
  SEND_CONTACT_MSG_FAILED,
  ADMIN_LOGIN_FAILED,
  ADMIN_GET_IMAGES_FAILED,
  ADMIN_GET_CATEGORIES_FAILED,
  ADMIN_UPDATE_CATEGORIES_FAILED,
  ADMIN_ADD_PRODUCT_FAILED,
  ADMIN_GET_PUBLISHED_PRODUCTS_FAILED,
} from '../constants/ActionTypes';

const initialState = {};

const links = (state: ErrorsType = initialState, action: Object) => {
  switch (action.type) {
    case ADD_CART_ITEM_FAILED:
    case REMOVE_CART_ITEM_FAILED:
    case SEND_CONTACT_MSG_FAILED:
    case ADMIN_LOGIN_FAILED:
    case ADMIN_GET_IMAGES_FAILED:
    case ADMIN_ADD_PRODUCT_FAILED:
    case ADMIN_UPDATE_CATEGORIES_FAILED:
    case ADMIN_GET_CATEGORIES_FAILED:
    case ADMIN_GET_PUBLISHED_PRODUCTS_FAILED:
      return { error: action.error };
    default:
      return state;
  }
};

export default links;
