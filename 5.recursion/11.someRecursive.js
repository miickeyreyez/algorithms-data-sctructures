function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

callback = val => val < 10;

someRecursive([1,2,3,4], callback);
