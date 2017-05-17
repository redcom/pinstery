import { combineReducers } from 'redux';
import error from './error';
import cartItems from './cartItems';

const rootReducer = combineReducers({
  cartItems,
  error,
});

export default rootReducer;
