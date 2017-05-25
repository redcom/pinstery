// @flow

import type { State, ShopListType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { CartContent } from '../components';
import { removeFromCart } from '../actions/CartActions';

const CartContainer = (
  {
    cartItems = [],
    dispatch,
  }: {
    cartItems: ShopListType,
    dispatch: Function,
  },
) => {
  const onRemoveFromCart = id => () => { dispatch(removeFromCart(id)); };

  return (
    <CartContent cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
  );
};
export default connect((state: State) => ({ cartItems: state.cartItems }))(CartContainer);
