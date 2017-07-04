// @flow
import type { ShopItemType } from '../store/CommonStoreTypes';
import { GET_ITEM } from '../constants/ActionTypes';

const initialState = null;

const itemDetails = (state: ?ShopItemType = initialState, action: Object) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...action.item,
      };
    default:
      return state;
  }
};

export default itemDetails;
