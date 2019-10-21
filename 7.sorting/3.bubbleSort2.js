const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

function bubbleSort(arr) {
  let noSwaps;

  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
}

bubbleSort([37, 45, 29, 8]);
