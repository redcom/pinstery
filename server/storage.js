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
    put: items => {
      const updates = {};
      updates[`/${bucket}/${buckets[0]}`] = items;
      rootRef.update(updates);
      return rootRef.child(`/${bucket}/${buckets[0]}`);
    },
    delete: id => bucket.filter(i => i.id !== id),
    getAll: () => bucket,
    findById: () => {
      if (!buckets.length) {
        return false;
      }
      return rootRef.child(`/${bucket}/${buckets[0]}`);
    },
  };
};

export default storage;
