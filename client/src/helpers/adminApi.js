import axios from 'axios-es6';
import { API_URL } from '../config';

const opts = {
  mode: 'cors',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

export const apiAuth = () => async () => {
  try {
    const response = await axios.post(
      `${API_URL}/admin`,
      { action: 'auth' },
      opts,
    );
    if (response.status !== 200) {
      throw new Error('Can not login');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const apiLogin = ({ email, password }) => async () => {
  try {
    const response = await axios.post(`${API_URL}/admin`, {
      email,
      password,
      action: 'login',
    });
    if (response.status !== 200) {
      throw new Error('Can not login');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
