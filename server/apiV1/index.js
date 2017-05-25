import express from 'express';

import { addCart, deleteCart, getCartItem, getAllCartItems } from './cart';

const Router = express.Router();

const ApiV1 = () => {
  Router.post('/cart', addCart)
    .delete('/cart', deleteCart)
    .get('/cart/:id', getCartItem)
    .get('/cart', getAllCartItems);

  return Router;
};

export default ApiV1();
