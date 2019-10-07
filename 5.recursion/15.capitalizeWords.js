function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  const res = capitalizeWords(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0].toUpperCase();

  res.push(string);

  return res;
}

capitalizeWords(['car', 'taco', 'banana', 'tomatoe']);

function capitalizeWords(arr) { if (arr.length === 0) return []; return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1))); }
