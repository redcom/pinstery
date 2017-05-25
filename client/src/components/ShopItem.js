// @flow

import type { ShopItemType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween, smallFontSize } from '../styles/vars';
import { Button, Image, Price } from '../components';

const ShopItemBox = styled.div`
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${defaultSpaceInBetween};
  padding: 0 30px;
  min-width: 10em;
  font-size: ${smallFontSize};
}`;

const Description = styled.div`
  margin: 0;
`;


const AddToCartBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  &${'> button'} { display: none; },
  &${':hover'} {
    background: rgba(250, 250, 250, 0.9);
    &${'> button'} { display: block; }
 }
`;

type ExtendedShopItem = ShopItemType & {onAddToCart: Function}

const renderPriceInformation = (price, discount) => {
  if (discount > 0) {
    return [
      <Price regular>{price}</Price>,
      <Price discount>{discount}</Price>,
    ];
  }
    return <Price>{price}</Price>;
};
const ShopItem = (
  {
    id = 0,
    description = '',
    price = 0,
    onAddToCart,
    image = '',
    isNew,
    discount = 0,
  }: ExtendedShopItem,
) => (
  <ShopItemBox>
    <Image image={`../assets/items/${image}`}>
      <AddToCartBox>
        <Button alignSelf="center" onClick={onAddToCart}>Add to cart</Button>
      </AddToCartBox>
    </Image>
    <Description>{description} item#{id}</Description>
    {renderPriceInformation(price, discount)}

  </ShopItemBox>
);

export default ShopItem;
