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
  HorizontalSeparator,
  ImageGallery,
  OrderBox,
  Title,
  WrapperFlex,
  // Button,
} from '../components';
import {
  smallFontSize,
  defaultFontSize,
  // defaultAlertBgColor,
  // defaultBtnBorderColor,
  grey,
} from '../styles/vars';

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    width: 100%;
  }
  @media (min-width: 400px) and (max-width: 700px) {
    column-count: 2;
    :A: ;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    column-count: 3;
    column-gap: 3em;
  }
`;

const Description = styled.div`
  padding: 0 1em;
  font-size: ${smallFontSize};
  border: 1px solid red;
`;

const ViewDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1em;
`;

const TitleDetails = Title.extend`
  margin: 0;
  text-align: justify;
`;

const PriceAndDiscountBox = styled.div`
  display: flex;
  justify-content: center;
  & > div + div {
    margin-left: 0.5em;
  }
`;

const PriceAsTitle = Price.withComponent(Title);
const TitlePrice = PriceAsTitle.extend`
  margin: 0;
  font-size: ${defaultFontSize};
`;

//
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
    <TitlePrice>
      {price}
    </TitlePrice>
  );
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed ${grey};
  width: 100%;
`;
const WrapContent = WrapperFlex.extend`margin: 0 15%;`;

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
      <Title>
        {' '}{title}{' '}
      </Title>
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
        <TitleDetails>Description</TitleDetails>
        <Description>
          {description} item#{id}
        </Description>
        <HorizontalSeparator />
        <OrderBox id={id} addToCart={addToCart} />
      </ViewDetailBox>
    </ItemBox>
  </WrapContent>;

export default ItemDetailsComponent;
