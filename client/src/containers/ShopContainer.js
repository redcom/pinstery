// @flow
import type { State, ShopListType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, ShopItem, ShopList, ShopMenu } from '../components';

const ShopContainer = ({
  shopItems = [],
  dispatch,
}: {
  shopItems: ShopListType,
}) => {
  const GridWrapper = Wrapper.extend`
  display: flex;
`;

  return (
    <GridWrapper>
      <ShopMenu />
      <ShopList>
        {shopItems.map(item =>
          <ShopItem key={item.id} {...item} />,
        )}
      </ShopList>
    </GridWrapper>
  );
};

export default connect((state: State) => ({
  shopItems: state.shopItems,
}))(ShopContainer);
