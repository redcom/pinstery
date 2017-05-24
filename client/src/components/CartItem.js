// @flow

import type { CartItemType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween } from '../styles/vars';
import { Button, Image } from '../components';

const ShopItemBox = styled.div`
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${defaultSpaceInBetween};
  padding: 0 30px;
}`;

const Description = styled.div`
  padding: 0 30px;
  overflow: hiddden;
`;

const Price = styled.div`
  margin-top: 1.2em;
  color: #84b3eb;
  font-size: 1.2em;
  &${':after'} { content: '€'; }
`;

const ItemActions = styled.div`
`;

const AddToCartBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  &${'> button'} { display: none; }
  &${':hover'} {
    background: rgba(250, 250, 250, 0.9);
    &${'> button'} { display: block; }
 }
`;

type ExtendedShopItem = CartItemType & {onDelete: Function}

const ShopItem = (
  {
    id = 0,
    description = '',
    price = 0,
    onDelete,
    image = '',
  }: ExtendedShopItem,
) => (
  <ShopItemBox>
    <Image image={`../assets/items/${image}`}>
      <AddToCartBox>
        <Button alignSelf="center">Add to cart</Button>
      </AddToCartBox>
    </Image>

    <Description>{description}</Description>

    <Price>{price}</Price>

      {false &&
    <ItemActions>
      <Button onClick={onDelete}>Delete</Button>
    </ItemActions>
      }
  </ShopItemBox>
);

export default ShopItem;
