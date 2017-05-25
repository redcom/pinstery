// @flow
import type { CartItemType, ShopItemType } from '../store/CommonStoreTypes';

import React from 'react';
import { Button, Price } from '../components';
import styled from 'styled-components';
import {
  boxShadow,
  defaultBorderColor,
  defaultPrimaryBgColor,
  defaultSpaceBetweenElements,
  smallFontSize,
} from '../styles/vars';

const CartItems = styled.div`
  position: absolute;
  top: 2.5em;
  right: -1em;
  width: 250px;
  box-shadow: ${boxShadow};
  font-size: ${smallFontSize}
`;

const ArrowUp = styled.div`
  position: relative;
  left: 84%;
  top: -15px;
  width: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid ${defaultPrimaryBgColor};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${defaultPrimaryBgColor};
`;
const ListItem = styled.li`
  margin: ${defaultSpaceBetweenElements};
  padding: 1em 0;
  display: flex;
  border-bottom: 1px solid ${defaultBorderColor};
  &${':first-of-type'} { margin-top: -1em; },
  &${':last-of-type'} { border-bottom: none; },
`;

const Left = styled.div`
  flex: 1;
  &${'>img'} {width: 70% };
`;

const Right = styled.div`
  flex: 3;
`;

const Description = styled.div`
  min-height: 3.7em;
  overflow: hidden;
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const renderCartItem = onRemove => item => (
    <ListItem key={item.id}>
      <Left>
        <img src={`../assets/items/${item.image}`} alt="" />
        <Price
          marginTop="0.4em"
        >
          {item.price}
        </Price>
      </Left>
      <Right>
          <Description>{item.description}</Description>
          <ExtraInfo>
            <Price marginTop="0.4em" >
              {item.price}
            </Price>
            <Button
              fontSize={smallFontSize}
              width="auto"
              onClick={onRemove(item.id)}
            >
              Remove
            </Button>
          </ExtraInfo>
      </Right>
    </ListItem>
  );

type FullCartItemInfo = ShopItemType & CartItemType;
type CartListType = {
  cartList: Array<FullCartItemInfo>,
  onRemove: Function
};

const CartList = (
  {
    cartList = [],
    onRemove,
  }: CartListType,
) => (
  <CartItems>
    <ArrowUp />
    <List>
      { cartList.map(renderCartItem(onRemove)) }
    </List>
  </CartItems>
);

export default CartList;
