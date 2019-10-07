function productArray(arr) {
  let total = 1;

  if (arr.length === 0) {
    return 1;
  }

  total = arr[0] * productArray(arr.slice(1));

  return total;
}

productArray([1, 2, 3, 4]);
