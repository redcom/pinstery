import express from 'express';

import { addCart, deleteCart, getCartItem, getAllCartItems } from './cart';
import { getItemDetails } from './items';

const Router = express.Router();

const ApiV1 = () => {
  Router
    .post('/cart', addCart)
    .delete('/cart', deleteCart)
    .get('/cart/:id', getCartItem)
    .get('/cart', getAllCartItems)

    // items information
    .get("/item/:id", getItemDetails)
  ;

  return Router;
};

export default ApiV1();
