function callback(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return callback(array.slice(1), callback);
}

callback([1, 2, 3], val => val > 10);
