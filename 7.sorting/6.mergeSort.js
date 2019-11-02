function merge(arr1, arr2) {
  const result = [];
  const i = 0;
  const j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
    
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// merge([1, 10, 50], [2, 14, 99, 100]);
mergeSort([10, 24, 76, 73, 72, 1, 9]);
