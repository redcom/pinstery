import { combineReducers } from 'redux';
import error from './error';

import admin from './admin';
import shopItems from './shopItems';
import cartItems from './cartItems';
import itemDetails from './itemDetails';

const rootReducer = combineReducers({
  admin,
  shopItems,
  cartItems,
  itemDetails,
  error,
});

export default rootReducer;
