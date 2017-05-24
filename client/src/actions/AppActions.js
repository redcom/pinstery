// @flow

import {
  GET_INITIAL_STATE,
  HIDRATE_INITIAL_STATE,
} from '../constants/ActionTypes';

export const hidrateStoreWithState = (state: Object): Object => ({
  type: HIDRATE_INITIAL_STATE,
  state,
});
export const getInitialState = (cb: Function): Object => ({
  type: GET_INITIAL_STATE,
  cb,
});
