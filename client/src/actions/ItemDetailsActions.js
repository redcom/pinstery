// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { apiLoadItemDetails } from '../helpers/api';
import { GET_ITEM, GET_ITEM_FAILED } from '../constants/ActionTypes';

export const getItemDetailsFailed = (error: ErrorsType): Object => ({
  type: GET_ITEM_FAILED,
  error,
});

export const loadItemDetails = (id: string): Function => async dispatch => {
  try {
    const item = await apiLoadItemDetails(id)();
    return dispatch({
      type: GET_ITEM,
      item,
    });
  } catch (error) {
    return dispatch(getItemDetailsFailed(error));
  }
};
