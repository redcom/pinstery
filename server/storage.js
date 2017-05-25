// simple plain storage engine with quick access methods to manage a simple store
const storage = () => {
  const bucket = [];
  const store = bucket => ({
    get: id => bucket[id],
    put: item => {
      bucket.unshift(item);
    },
    delete: id => bucket.filter(i => i.id !== id),
    getAll: () => bucket,
    getNextId: () => bucket.length + 1,
    findById: id => bucket.find(i => i.id === id),
  });

  return store(bucket);
};

export default storage;
