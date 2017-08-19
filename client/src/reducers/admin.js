// @flow
/* eslint-disable no-case-declarations */
import type { AdminType } from '../store/CommonStoreTypes';
import {
  ADMIN_LOGIN,
  ADMIN_GET_IMAGES,
  ADMIN_GET_CATEGORIES,
  ADMIN_UPDATE_CATEGORIES,
  ADMIN_ADD_PRODUCT,
} from '../constants/ActionTypes';

const initialState = {
  isAdmin: false,
  isAuth: false,
  url: '',
  token: null,
  publishProducts: [],
  images: {},
  categories: {},
};

const admin = (state: AdminType = initialState, action: Object) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      localStorage.setItem(
        'auth',
        JSON.stringify({ isAdmin: true, token: action.token }),
      );
      return {
        ...state,
        isAdmin: true,
        url: action.url,
        isAuth: false,
        token: action.token,
      };
    case ADMIN_GET_IMAGES:
      return { ...state, images: action.images };
    case ADMIN_ADD_PRODUCT:
      let publishProducts = [];
      if (state.publishProducts.length) {
        publishProducts = state.publishProducts.reduce((acc, item) => {
          if (item && item.id !== action.product.id) {
            acc.push(item);
          } else {
            acc.push(action.product);
          }
          return acc;
        }, []);
      } else {
        publishProducts.push(action.product);
      }
      return { ...state, publishProducts };
    case ADMIN_GET_CATEGORIES:
      return { ...state, categories: action.categories };
    case ADMIN_UPDATE_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      const credentials = JSON.parse(localStorage.getItem('auth'));
      if (credentials && credentials.isAdmin && credentials.token) {
        return {
          ...state,
          ...credentials,
        };
      }
      return state;
  }
};

export default admin;
