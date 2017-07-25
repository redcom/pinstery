import axios from 'axios-es6';
import { API_URL } from '../config';

export const apiLoadImages = ({ email, token }) => async () => {
  try {
    const response = await axios.post(`${API_URL}/admin`, {
      email,
      token,
      action: 'getImages',
    });
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
