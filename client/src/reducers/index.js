import { combineReducers } from 'redux';
import error from './error';

import shopItems from './shopItems';
import cartItems from './cartItems';
import itemDetails from './itemDetails';

const rootReducer = combineReducers({
  shopItems,
  cartItems,
  itemDetails,
  error,
});

export default rootReducer;
