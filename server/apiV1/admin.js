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

const login = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'admin' });
  const { email, password } = req.body;
  const existingItemRef = storage.findById({});
  existingItemRef.once('value', snapshot => {
    const existingItems = snapshot.val();
    if (!existingItems || !existingItems.length) {
      const newItemRef = storage.put([{ email, password }]);
      newItemRef.once('value', snapshot => {
        res.json({ email: snapshot.val()[0].email });
      });
    } else {
      const itemExists = existingItems.find(
        i => i.email === email && i.password === password,
      );
      if (itemExists) {
        // TODO update login date
        res.json({ email });
      } else {
        res.sendStatus(403).end('Login with email and password');
      }
    }
  });
};

const doOneDrieAuth = () => {};

const auth = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'admin' });
  const existingItemRef = storage.findById({});
  existingItemRef.once('value', snapshot => {
    const existingItems = snapshot.val();
    if (!existingItems || !existingItems.length) {
      res.sentStatus(403).end('User is not logged in');
    } else {
      const itemExist = existingItems[0];
      if (itemExists.authToken) {
        res.json({ tocken: itemExists.authToken });
      } else {
        doOneDriveAuth();
      }
    }
  });
};

export const admin = (req, res) => {
  const { action } = req.body;

  switch (action) {
    case 'login':
      login(req, res);
      break;
    case 'auth':
      auth(req, res);
      break;
    case 'updateProducts':
      updateProducts(req, res);
      break;
    default:
      res.sendStatus(403).end('What do you want me to do?');
      break;
  }
};
