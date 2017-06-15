// @flow

import type { ShopItemType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import {
  Button,
  Image,
  Price,
  PriceRegular,
  PriceDiscounted,
} from '../components';
import {
  smallFontSize,
  defaultAlertBgColor,
  defaultBtnBorderColor,
  white,
} from '../styles/vars';

const ShopItemBox = styled.div`
  height: 305px;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
  width: 100%;
  }
  @media (min-width: 400px) and (max-width: 700px) {
    column-count: 2;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    column-count: 3;
    column-gap: 3em;
  }
`;

const Description = styled.div`
  padding: 0 1em;
  font-size: ${smallFontSize};
`;

const AddToCartBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  &>button { display: none; }
  &:hover {
    background: rgba(250, 250, 250, 0.8);
    transition: background 0.3s ease;
    &>button { display: block; }
  }
`;

const PriceAndDiscountBox = styled.div`
  display: flex;
  justify-content: center;
  &>div+div { margin-left: 0.5em; }
`;

const SpecialItem = styled.div`
  background-color: ${defaultAlertBgColor};
  padding: 0.5em;
  color: ${white};
  margin: 0.5em 1em;
  height: 1em;
  border: 1px solid ${defaultBtnBorderColor};
  text-transform: uppercase;
  line-height: 1;
  border-radius: 5px;
  font-size: ${smallFontSize};
  position: absolute;
`;

const renderPriceInformation = ({ price, discount }) => {
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

const renderSpecialItem = ({ isNew, discount }) => {
  if (isNew) {
    return <SpecialItem>New</SpecialItem>;
  }
  if (discount) {
    return <SpecialItem>Sale</SpecialItem>;
  }
  return null;
};

type ExtendedShopItem = ShopItemType & { onAddToCart: Function };

const ShopItem = ({
  id = 0,
  description = '',
  price = 0,
  onAddToCart,
  image = '',
  isNew,
  discount = 0,
}: ExtendedShopItem) =>
  <ShopItemBox>
    <Image image={`../assets/items/${image}`}>
      {renderSpecialItem({ isNew, discount })}
      <AddToCartBox>
        <Button alignSelf="center" onClick={onAddToCart}>Add to cart</Button>
      </AddToCartBox>
    </Image>
    <Description>{description} item#{id}</Description>
    {renderPriceInformation({ price, discount })}

  </ShopItemBox>;

export default ShopItem;
