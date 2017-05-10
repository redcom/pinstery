import express from 'express';

import { newLink, deleteLink, getLink, getAllLinks } from './links';
import { addCart, deleteCart, getCartItem, getAllCartItems } from './cart';

const Router = express.Router();

const ApiV1 = () => {
  Router.post('/links', newLink)
    .delete('/links', deleteLink)
    .get('/links/:id', getLink)
    .get('/links', getAllLinks);

  Router.post('/cart', addCart)
    .delete('/cart', deleteCart)
    .get('/cart/:id', getCartItem)
    .get('/cart', getAllCartItems);

  return Router;
};

export default ApiV1();
