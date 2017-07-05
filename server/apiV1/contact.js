export const sendContactMessage = (req, res) => {
  // initialize cart bucket for this specific user
  const storage = req.app.get('storage')({ bucket: 'contact_message' });
  const item = {
    ...req.body,
    id: Date.now(),
  };
  const newItemRef = storage.post([item]);
  newItemRef.once('value', snapshot => {
    res.json(snapshot.val()[0]);
  });
};
