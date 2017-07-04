import * as firebase from 'firebase';
import { firebaseConfig } from '../config';

firebase.initializeApp(firebaseConfig);

const rootRef = firebase.database().ref();
const buckets = [];

// simple plain storage engine with quick access methods to manage a simple store
const storage = () => ({ bucket }) => {
  if (!buckets.length) {
    const newKey = rootRef.child(bucket).push().key;
    buckets.push(newKey);
  }

  return {
    get: id => bucket[id],
    /* put updates value at a single location*/
    put: items => {
      const updates = {};
      updates[`/${bucket}/${buckets[0]}`] = items;
      rootRef.update(updates);
      return rootRef.child(`/${bucket}/${buckets[0]}`);
    },
    /* POST creates multiple entries */
    post: items => {
      const updates = {};
      items.reduce((acc, item) => {
        acc[`/${bucket}/${item.id}`] = item;
        return acc;
      }, updates);
      rootRef.update(updates);
      return rootRef.child(`/${bucket}`);
    },
    delete: id => bucket.filter(i => i.id !== id),
    getAll: () => bucket,
    findById: ({ id = 0 }) => {
      if (!buckets.length) {
        return false;
      }
      if (!id) {
        return rootRef.child(`/${bucket}/${buckets[0]}`);
      }
      if (id) {
        return rootRef.child(`/${bucket}/${id}`);
      }
      return false;
    },
  };
};

export default storage;
