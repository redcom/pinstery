import express from 'express';

// curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache"  -d '{"username":"adriana", "password":"gazuta", "action":"updateProducts"}' "http://localhost:9999/v1/adm" -v'
import { admin } from './admin';
import { sendContactMessage } from './contact';

import { addCart, deleteCart, getCartItem, getAllCartItems } from './cart';
import { getItemDetails } from './items';

const Router = express.Router();

const ApiV1 = () => {
  Router.post('/admin', admin)
    .post('/contact', sendContactMessage)
    .post('/cart', addCart)
    .delete('/cart', deleteCart)
    .get('/cart/:id', getCartItem)
    .get('/cart', getAllCartItems)
    // items information
    .get('/item/:id', getItemDetails);

  return Router;
};

export default ApiV1();
