import axios from 'axios-es6';
import { azureConfig } from '../../config';
import { addCategory, deleteCategory, getCategories } from './admin/categories';
import { getProducts } from './admin/products';
import { login } from './admin/login';

const adminProducts = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'products' });
  const { product, productAction } = req.body;

  switch (productAction) {
    // case 'add':
    //   return addCategory(req, res);
    // case 'delete':
    //   return deleteCategory(req, res);
    case 'load':
      return getProducts(req, res);
    default:
      res.sendStatus(200).end('administer categories');
  }
};
const adminCategories = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'categories' });
  const { category, categoryAction } = req.body;

  switch (categoryAction) {
    case 'add':
      return addCategory(req, res);
    case 'delete':
      return deleteCategory(req, res);
    case 'load':
      return getCategories(req, res);
    default:
      res.sendStatus(200).end('administer categories');
  }
};

const addProduct = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'products' });
  const {
    title,
    description,
    price,
    size,
    category,
    url,
    id,
    published,
  } = req.body;
  const items = [
    {
      title,
      description,
      price,
      size,
      category,
      url,
      id,
      published,
      publishDate: Date.now(),
    },
  ];
  const newItemsRef = storage.post(items);
  newItemsRef.once('value', snapshot => {
    const itemsCreated = Object.keys(snapshot.val()).length;
    const success = itemsCreated > 0;
    if (success) {
      res.json({ product: items[0] });
    } else {
      res.sendStatus(500).end('Error Creating products');
    }
  });
};

const getAuthUrl = () => {
  const { clientId, redirectUri, authServiceUri, scopes } = azureConfig;
  const rUri = redirectUri;
  const scope = escape(scopes);
  const redirectUrl = `${authServiceUri}?client_id=${clientId}&response_type=token&redirect_uri=${rUri}&scope=${scope}`;

  return redirectUrl;
};

const getImages = token =>
  (async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await axios.get(azureConfig.imagesUrl, config);
      if (response.status !== 200) {
        throw new Error('Can not get images');
      }
      return response.data;
    } catch (error) {
      console.log('Error getting image'); // eslint-disable-line no-console
      return null;
    }
  })();

const getToken = token =>
  (async () => {
    const images = await getImages(token);
    return images ? token : null;
  })();

const getAdminImages = (req, res) => {
  (async () => {
    try {
      const token = req.body.token;
      const images = await getImages(token);
      res.json(images);
    } catch (error) {
      res.sendStatus(500);
    }
  })();
};

export const authCallback = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'admin' });
  const token = req.body.token;
  storage.getAll().once('value', s => {
    const admins = s.val();
    if (admins) {
      const admin = Object.values(admins)[0];
      const key = Object.keys(admins)[0];
      const update = [
        {
          id: key,
          ...admin,
          token,
        },
      ];
      if (key && admin) {
        const updateUser = storage.post(update);
        updateUser.once('value', snapshot => {
          const item = snapshot.val();
          if (item) {
            res.sendStatus(200);
          } else {
            res.sendStatus(403).end('Login with email and password');
          }
        });
      } else {
        res.sendStatus(403).end('Can not find any admin');
      }
    } else {
      res.redirect(301, 'http://localhost:3000/admin');
    }
  });
};

export const admin = (req, res) => {
  const { action } = req.body;

  switch (action) {
    case 'login':
      login(req, res);
      break;
    case 'categories':
      adminCategories(req, res);
      break;
    case 'getImages':
      getAdminImages(req, res);
      break;
    case 'products':
      adminProducts(req, res);
      break;
    case 'addProduct':
      addProduct(req, res);
      break;
    default:
      res.sendStatus(403).end('What do you want me to do?');
      break;
  }
};
