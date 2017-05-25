import { combineReducers } from 'redux';
import error from './error';

import shopItems from './shopItems';
import cartItems from './cartItems';

const rootReducer = combineReducers({
  shopItems,
  cartItems,
  error,
});

export default rootReducer;
