export const getItemDetails = (req, res) => {
  // initialize cart bucket for this specific user
  // const storage = req.app.get('storage')({ bucket: 'item' });

  console.log('asddd', req.params)
  res.end(JSON.stringify({item: {lol:12, id: req.params.id}}));

  // const existingItemRef = storage.findById();
  // existingItemRef.once('value', snapshot => {
  //   const existingItems = snapshot.val();
  //   if (!existingItems || !existingItems.length) {
  //     const newItemRef = storage.put([item]);
  //     newItemRef.once('value', snapshot => {
  //       res.json(snapshot.val()[0]);
  //     });
  //   } else {
  //     const itemAlreadyInCart = existingItems.find(i => i.id === item.id);
  //     if (itemAlreadyInCart) {
  //       itemAlreadyInCart.quantity += 1;
  //     } else {
  //       existingItems.push(item);
  //     }
  //     const updateItemRef = storage.put(existingItems);
  //     updateItemRef.once('value', () => {
  //       res.json(itemAlreadyInCart || item);
  //     });
  //   }
  // });
};
