// @flow
import type { ShopListType } from '../store/CommonStoreTypes';
import { items } from '../store/items';

const initialState = items;
const shopItems = (state: ShopListType = initialState, action: Object) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopItems;
