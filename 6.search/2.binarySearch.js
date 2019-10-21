function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let pivot = Math.floor((start + end) / 2);
  
  while (arr[pivot] !== element && start <= end) {
    if (element < arr[pivot]) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }

    pivot = Math.floor((start + end) / 2);
  }

  return arr[pivot] === element ? pivot : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
