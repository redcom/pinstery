// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { apiAddCartItem, apiRemoveCartItem } from '../helpers/api';
import {
  ADD_CART_ITEM,
  ADD_CART_ITEM_FAILED,
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEM_FAILED,
} from '../constants/ActionTypes';

export const addCartItemFailed = (error: ErrorsType): Object => ({
  type: ADD_CART_ITEM_FAILED,
  error,
});
export const removeItemFailed = (error: ErrorsType): Object => ({
  type: REMOVE_CART_ITEM_FAILED,
  error,
});

export const addItem = (item: Object): Function =>
  async dispatch => {
    try {
      const { id } = await apiAddCartItem(item)();
      return dispatch({
        type: ADD_CART_ITEM,
        item: {
          ...item,
          id,
        },
      });
    } catch (error) {
      return dispatch(addCartItemFailed(error));
    }
  };

export const deleteItem = (id: number): Function =>
  async dispatch => {
    if (!id) {
      dispatch(removeItemFailed(new Error('Item can not be removed')));
    }
    try {
      await apiRemoveCartItem({ id })();
      dispatch({
        type: REMOVE_CART_ITEM,
        id,
      });
    } catch (error) {
      dispatch(removeItemFailed(error));
    }
  };