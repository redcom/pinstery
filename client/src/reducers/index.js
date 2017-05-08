import { combineReducers } from 'redux';
import links from './links';
import error from './error';
import cartItems from './cartItems';

const rootReducer = combineReducers({
  links,
  cartItems,
  error,
});

export default rootReducer;
