// @flow

import type { CartListType, ShopListType } from '../store/CommonStoreTypes';

import React from 'react';
import { CartList } from '../components';

import styled from 'styled-components';
import {
  defaultPrimaryBgColor,
  defaultPrimaryColor,
  smallFontSize,
} from '../styles/vars';

const CartContent = styled.div`
  position: absolute;
  right: 2em;
  top: 2em;
`;
const CartCounter = styled.div`
  position: absolute;
  background: ${defaultPrimaryColor};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  top: -2em;
  right: -1.5em;
  color: ${defaultPrimaryBgColor};
  text-align: center;
  line-height: 30px;
  font-size: ${smallFontSize};
`;

type ExtendedCartListType = {
  onRemoveFromCart: Function,
  cartItems: CartListType,
  shopItems: ShopListType,
};

const Cart = ({
  cartItems = [],
  shopItems = [],
  onRemoveFromCart,
}: ExtendedCartListType) => {
  const cartList = cartItems.map(cartItem => {
    const shopItem = shopItems.find(shopItem => shopItem.id === cartItem.id);
    return shopItem && { ...shopItem, ...cartItem };
  });

  return (
    <CartContent>
      <img src={'../assets/cart.svg'} alt="cart" />
      {cartItems.length > 0 && [
        <CartCounter key="cartCounter">{cartItems.length}</CartCounter>,
        <CartList
          key="cartList"
          cartList={cartList}
          onRemove={onRemoveFromCart}
        />,
      ]}
    </CartContent>
  );
};

export default Cart;
