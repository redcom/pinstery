// @flow

import type { CartListType } from '../store/CommonStoreTypes';
import React from 'react';

import {
  defaultPrimaryBgColor,
  defaultPrimaryColor,
  smallFontSize,
} from '../styles/vars';
import styled from 'styled-components';
// import { Button, Image } from '../components';


// $FlowFixMe define a module for this required
const CartImage = require('../../public/assets/cart.svg');


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

type ExtendedCartListType = { onRemoveFromCart: Function, cartItems: CartListType }

const Cart = (
  {
    cartItems = [],
    onRemoveFromCart,
  }: ExtendedCartListType,
) => (
    <CartContent>
      <img src={CartImage} alt="cart" />
    {cartItems.length > 0 && <CartCounter>{cartItems.length}</CartCounter>}
    </CartContent>
);

export default Cart;
