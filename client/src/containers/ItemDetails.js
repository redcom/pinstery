// @flow
import type { State, ShopItemType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { ItemDetails, Loader } from '../components';
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
  const { id } = match.params;

  if (!itemDetails) {
    dispatch(loadItemDetails(id));
  }

  const displayItemDetails = () => <ItemDetails {...itemDetails} />;

  return (
    <Loader
      type={'small'}
      loading={!itemDetails}
      onLoaded={itemDetails ? displayItemDetails : null}
    />
  );
};

export default connect((state: State) => ({
  itemDetails: state.itemDetails || null,
}))(ItemDetailsContainer);
