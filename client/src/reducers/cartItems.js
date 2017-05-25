// @flow
import type { CartListType } from '../store/CommonStoreTypes';
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants/ActionTypes';

const initialState = [];

const cartItems = (state: CartListType = initialState, action: Object) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      // do not put same element twice in the cart
      return [action.item, ...state.filter(item => item.id !== action.item.id)];
    case REMOVE_CART_ITEM:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default cartItems;
