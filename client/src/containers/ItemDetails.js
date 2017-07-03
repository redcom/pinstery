// @flow
import type { State, ShopItemType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Title } from '../components';
import { loadItemDetails } from '../actions/ItemDetailsActions';

let fetched = false;
const ItemDetails = ({
  dispatch,
  itemDetails,
  match,
}: {
  match: Object,
  itemDetails: ShopItemType,
  dispatch: Function,
}) => {


  const {id, title} = match.params;
  if (!itemDetails.id && !fetched) {
    console.log(fetched)
    dispatch(loadItemDetails(id));
    fetched = true;
  }

  return (
    <Wrapper>
    <Title>{title}</Title>
    {id}
    {JSON.stringify(itemDetails)}
    </Wrapper>
  );
};

export default connect((state: State) => ({
  itemDetails: state.itemDetails,
}))(ItemDetails);
