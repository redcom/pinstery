export const getCategories = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'categories' });
  const ref = storage.getAll();
  ref.once('value', snapshot => {
    res.json(snapshot.val());
  });
};
export const deleteCategory = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'categories' });
  const { category: { id } } = req.body;
  const newItemRef = storage.delete(id);
  newItemRef.once('value', snapshot => {
    res.json(snapshot.val());
  });
};

export const addCategory = (req, res) => {
  const storage = req.app.get('storage')({ bucket: 'categories' });
  const { category } = req.body;
  const items = [
    {
      category,
      publishDate: Date.now(),
      id: `category-${Date.now()}`,
    },
  ];

  const newItemRef = storage.post(items);
  newItemRef.once('value', snapshot => {
    res.json(snapshot.val());
  });
};
