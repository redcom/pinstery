// @flow
import type { State, ShopItemType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Title, ItemDetails } from '../components';
import { loadItemDetails } from '../actions/ItemDetailsActions';

const ItemDetailsContainer = ({
  dispatch,
  itemDetails,
  match,
}: {
  match: {
    params: {
      id: string,
      title: string,
    },
  },
  itemDetails: ?ShopItemType,
  dispatch: Function,
}) => {
  const { id, title } = match.params;

  if (!itemDetails) {
    dispatch(loadItemDetails(id));
  }

  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
      <ItemDetails {...itemDetails} />
    </Wrapper>
  );
};

export default connect((state: State) => ({
  itemDetails: state.itemDetails || null,
}))(ItemDetailsContainer);
