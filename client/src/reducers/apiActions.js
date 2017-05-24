// @flow

import type { State } from '../store/CommonStoreTypes';
import { GET_INITIAL_STATE } from '../constants/ActionTypes';
import { fetchStateFromServer } from '../helpers/api';

const apiActions = (state: State, action: Object) => {
  switch (action.type) {
    case GET_INITIAL_STATE:
      fetchStateFromServer(action.cb);
      return state;
    default:
      return state;
  }
};

export default apiActions;
