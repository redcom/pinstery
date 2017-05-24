// @flow
import type { CartListType } from '../store/CommonStoreTypes';
import { items } from '../store/items';
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants/ActionTypes';

const initialState = items;
const cartItems = (state: CartListType = initialState, action: Object) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return [action.item, ...state];
    case REMOVE_CART_ITEM:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default cartItems;
