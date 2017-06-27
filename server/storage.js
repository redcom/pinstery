import * as firebase from 'firebase';
import { firebaseConfig } from '../config';

firebase.initializeApp(firebaseConfig);

const rootRef = firebase.database().ref();
const buckets = [];

// simple plain storage engine with quick access methods to manage a simple store
const storage = () => ({ bucket }) => {
  if (!buckets.length) {
    const newKey = firebase.database().ref().child(bucket).push().key;
    buckets.push(newKey);
  }

  return {
    get: id => bucket[id],
    put: items => {
      const updates = {};
      updates[`/${bucket}/${buckets[0]}`] = items;
      firebase.database().ref().update(updates);
      return firebase.database().ref().child(`/${bucket}/${buckets[0]}`);
    },
    delete: id => bucket.filter(i => i.id !== id),
    getAll: () => bucket,
    getNextId: () => bucket.length + 1,
    findById: id => {
      if (!buckets.length) {
        return false;
      }
      return firebase.database().ref().child(`/${bucket}/${buckets[0]}`);
    },
  };
};

export default storage;
