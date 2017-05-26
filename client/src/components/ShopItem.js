// @flow

import type { ShopItemType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween, smallFontSize } from '../styles/vars';
import { Button, Image, Price, PriceRegular, PriceDiscounted } from '../components';


const ShopItemBox = styled.div`
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${defaultSpaceInBetween};
}`;

const Description = styled.div`
  font-size: ${smallFontSize};
  padding: 0 30px;
`;


const AddToCartBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  &>button { display: none; }
  &:hover {
    background: rgba(250, 250, 250, 0.9);
    &>button { display: block; }
 }
`;

const PriceAndDiscountBox = styled.div`
  display: flex;
  justify-content: center;
  &>div+div { margin-left: 0.5em; }
`;


type ExtendedShopItem = ShopItemType & {onAddToCart: Function}

const renderPriceInformation = (price, discount) => {
  if (discount > 0) {
    return (
      <PriceAndDiscountBox>
        <PriceRegular>{price}</PriceRegular>
        <PriceDiscounted>{discount}</PriceDiscounted>
      </PriceAndDiscountBox>
    );
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
