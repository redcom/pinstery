export const getItemDetails = (req, res) => {
  // initialize cart bucket for this specific user
  const storage = req.app.get('storage')({ bucket: 'products' });
  const { id } = req.params;
  const existingItemRef = storage.findById({ id });
  existingItemRef.once('value', snapshot => {
    const existingItems = snapshot.val();
    if (existingItems) {
      res.json({ item: existingItems });
    } else {
      res.json({ error: 'Item not available' });
    }
  });
};
