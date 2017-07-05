// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { apiSendContact } from '../helpers/api';
import {
  SEND_CONTACT_MSG,
  SEND_CONTACT_MSG_FAILED,
} from '../constants/ActionTypes';

export const sendContactMessageFailed = (error: ErrorsType): Object => ({
  type: SEND_CONTACT_MSG_FAILED,
  error,
});

export const sendContactMessage = ({
  email,
  message,
}: {
  email: string,
  message: string,
}): Function => async dispatch => {
  try {
    const contactMessage = await apiSendContact({ email, message })();
    return dispatch({
      type: SEND_CONTACT_MSG,
      contactMessage,
    });
  } catch (error) {
    return dispatch(sendContactMessageFailed(error));
  }
};
