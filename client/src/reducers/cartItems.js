// @flow
import type { CartListType } from '../store/CommonStoreTypes';

import {
	ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  GET_INITIAL_STATE,
  HIDRATE_INITIAL_STATE,
} from '../constants/ActionTypes';

import apiActions from './apiActions';

const initialState = [
  { id: 1, description: 'some description', quantity: 10, price: 10 },
  { id: 2, description: 'some description', quantity: 10, price: 10 },
  { id: 3, description: 'some description', quantity: 10, price: 10 },
  { id: 4, description: 'some description', quantity: 10, price: 10 },
  { id: 5, description: 'some description', quantity: 10, price: 10 },
];

const cartItems = (state: CartListType = initialState, action: Object) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return [action.item, ...state];
    case REMOVE_CART_ITEM:
      return state.filter(item => item.id !== action.id);
    case GET_INITIAL_STATE:
      return apiActions(state, action);
    case HIDRATE_INITIAL_STATE:
      return [...state, ...action.cartItems];
    default:
      return state;
  }
};

export default cartItems;
