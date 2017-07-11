// @flow

import type { ShopItemType } from '../store/CommonStoreTypes';
import React from 'react';
import styled from 'styled-components';
import {
  // Image,
  Price,
  PriceRegular,
  PriceDiscounted,
  VerticalSeparator,
  ImageGallery,
  OrderBox,
  Title,
  TitleItem,
  WrapperFlex,
  // Button,
} from '../components';
import {
  smallFontSize,
  greyText,
  // defaultAlertBgColor,
  // defaultBtnBorderColor,
  grey,
} from '../styles/vars';

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: ${smallFontSize};
  padding: 1em 0;
  color: ${greyText};
  height: 18em;
  min-width: 300px;
`;

const ViewDetailBox = styled.div`
  width: 30%;
  padding: 1em;
`;


const PriceAndDiscountBox = styled.div`
  display: flex;
  justify-content: center;
  & > div + div {
    margin-left: 0.5em;
  }
`;

const TitleProduct = Title.extend`
  font-size: 2em;
  margin: 0;
`;
const PriceAsTitle = TitleProduct.withComponent(Price);

// const SpecialItem = styled.div`
//   background-color: ${defaultAlertBgColor};
//   padding: 0.5em;
//   color: ${white};
//   margin: 0.5em 1em;
//   height: 1em;
//   border: 1px solid ${defaultBtnBorderColor};
//   text-transform: uppercase;
//   line-height: 1;
//   border-radius: 5px;
//   font-size: ${smallFontSize};
//   position: absolute;
// `;

const renderPriceInformation = ({ price, discount }) => {
  if (discount > 0) {
    return (
      <PriceAndDiscountBox>
        <PriceRegular>
          {price}
        </PriceRegular>
        <PriceDiscounted>
          {discount}
        </PriceDiscounted>
      </PriceAndDiscountBox>
    );
  }
  return (
    <PriceAsTitle>
      {price}
    </PriceAsTitle>
  );
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed ${grey};
  width: 100%;
`;
const WrapContent = WrapperFlex.extend`
  margin: 0 15%;
`;

type ExtendedShopItem = ShopItemType & { addToCart: Function };

const ItemDetailsComponent = ({
  id = 0,
  description = '',
  title = 'title',
  price = 0,
  image = '',
  isNew,
  discount = 0,
  addToCart = Function,
}: ExtendedShopItem) =>
  <WrapContent>
    <HeaderBox>
      <TitleProduct>
        { title }
      </TitleProduct>
      {renderPriceInformation({ price, discount })}
    </HeaderBox>
    <ItemBox>
      <ImageGallery>
        <img src={`../../assets/items/${image}`} alt="" />
      </ImageGallery>
      <VerticalSeparator />
      <ViewDetailBox>
        <div>
          {isNew}
        </div>
        <TitleItem>Description</TitleItem>
        <Description>
          {description} item#{id}
        </Description>
        <OrderBox id={id} price={price} addToCart={addToCart} />
      </ViewDetailBox>
    </ItemBox>
  </WrapContent>;

export default ItemDetailsComponent;
