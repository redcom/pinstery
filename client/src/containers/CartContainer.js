// @flow

import type { State, ShopListType, CartListType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { CartContent } from '../components';
import { removeFromCart } from '../actions/CartActions';

const CartContainer = (
  {
    cartItems = [],
    shopItems = [],
    dispatch,
  }: {
    cartItems: CartListType,
    shopItems: ShopListType,
    dispatch: Function,
  },
) => {
  const onRemoveFromCart = id => () => { dispatch(removeFromCart(id)); };

  return (
    <CartContent
      cartItems={cartItems}
      shopItems={shopItems}
      onRemoveFromCart={onRemoveFromCart}
    />
  );
};
export default connect((state: State) => ({
  cartItems: state.cartItems,
  shopItems: state.shopItems,
}))(CartContainer);
