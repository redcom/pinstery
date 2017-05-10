export const addCart = (req, res) => {
  const storage = req.app.get('storage');

  const item = {
    ...req.body,
    id: storage.getNextId(),
  };

  storage.put(item);
  res.json(storage.get(0));
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
