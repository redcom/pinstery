// @flow

import type { CartItemType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween } from '../styles/vars';
import { Button } from '../components';

const CartItemLine = styled.div`
  display: flex;
  padding: ${defaultSpaceInBetween};
  &:nth-child(2n+0) {
    background: #f0f0f0;
  }
}
`;

const ItemId = styled.div`
  flex-grow: 1;
`;
const ItemDescription = styled.div`
  flex-grow: 3;
  min-width:300px;
`;
const ItemQuantity = styled.div`
  flex-grow: 3;
  min-width: 50;
`;
const ItemPrice = styled.div`
  flex-grow: 3;
  min-width: 50;
`;

const ItemActions = styled.div`
  flex-grow: 2;
`;

type ExtendedCartItem = CartItemType & {onDelete: Function}

const CartItem = (
  {
    id = 0,
    description = '',
    quantity = 0,
    price = 0,
    onDelete,
  }: ExtendedCartItem,
) => (
  <CartItemLine>
    <ItemId>{id}</ItemId>
    <ItemDescription>{description}</ItemDescription>
    <ItemQuantity>{quantity}</ItemQuantity>
    <ItemPrice>{price}</ItemPrice>

    <ItemActions>
      <Button onClick={onDelete}>Delete</Button>
    </ItemActions>
  </CartItemLine>
);

export default CartItem;
