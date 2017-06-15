// @flow
import type { State, ShopListType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, ShopItem, ShopList, ShopMenu } from '../components';
import { ErrorContainer } from '../containers';
import { addToCart } from '../actions/CartActions';

const ShopContainer = ({
  shopItems = [],
  dispatch,
}: {
  shopItems: ShopListType,
  dispatch: Function,
}) => {
  const onAddToCart = item => () => {
    dispatch(addToCart(item));
  };

  const GridWrapper = Wrapper.extend`
  display: flex;
`;

  return (
    <GridWrapper>
      <ShopMenu />
      <ShopList>
        {shopItems.map(item =>
          <ShopItem key={item.id} onAddToCart={onAddToCart(item)} {...item} />,
        )}
      </ShopList>
      <ErrorContainer />
    </GridWrapper>
  );
};

export default connect((state: State) => ({ shopItems: state.shopItems }))(
  ShopContainer,
);
