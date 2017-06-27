export const addCart = (req, res) => {
  // initialize cart bucket for this specific user
  const storage = req.app.get('storage')({ bucket: 'cart' });

  const item = {
    ...req.body,
    quantity: 1,
  };
  const existingItemRef = storage.findById();
  existingItemRef.once('value', snapshot => {
    const existingItems = snapshot.val();
    if (!existingItems || !existingItems.length) {
      const newItemRef = storage.put([item]);
      newItemRef.once('value', snapshot => {
        res.json(snapshot.val());
      });
    } else {
      const itemAlreadyInCart = existingItems.find(i => i.id === item.id);
      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity++;
      } else {
        existingItems.push(item);
      }
      const updateItemRef = storage.put(existingItems);
      updateItemRef.once('value', snapshot => {
        res.json(itemAlreadyInCart || item);
      });
    }
  });
};

export const deleteCart = (req, res) => {
  const storage = req.app.get('storage');
  const id = req.body.id || -1;

  storage.delete(id);
  res.sendStatus(200);
};

export const getCartItem = (req, res) => {
  const storage = req.app.get('storage');
  const itemId = req.params.id || -1;

  res.json(storage.get(itemId));
};

export const getAllCartItems = (req, res) => {
  const storage = req.app.get('storage');

  res.json(storage.getAll());
};
