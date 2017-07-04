import { items } from '../../client/src/store/items';

const updateProducts = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'products' });
  const newItemsRef = storage.post(items);
  newItemsRef.once('value', snapshot => {
    const itemsCreated = Object.keys(snapshot.val()).length;
    const success = itemsCreated === items.length;
    if (success) {
      res.send(`Created: ${itemsCreated} items`);
    } else {
      res.sendStatus(500).end('Error Creating products');
    }
  });
};
export const admin = (req, res) => {
  // initialize cart bucket for this specific user
  const { username, password, action } = req.body;

  if (username === 'adriana' && password === 'gazuta') {
    switch (action) {
      case 'updateProducts':
        updateProducts(req, res);
        break;
      default:
        res.end('What do you want me to do?');
        break;
    }
  } else {
    res.sendStatus(403);
  }
};
