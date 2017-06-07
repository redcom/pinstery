// @flow
import type { ErrorsType } from '../store/CommonStoreTypes';

import { ADD_CART_ITEM_FAILED, REMOVE_CART_ITEM_FAILED } from '../constants/ActionTypes';

const initialState = {};

const links = (state: ErrorsType = initialState, action: Object) => {
  switch (action.type) {
    case ADD_CART_ITEM_FAILED:
      return { error: action.error };
    case REMOVE_CART_ITEM_FAILED:
      return { error: action.error };
    default:
      return state;
  }
};

export default links;
