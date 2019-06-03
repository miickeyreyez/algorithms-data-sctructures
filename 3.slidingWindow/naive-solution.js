// Complexity: O(n^2)
function slidingWindow(arr, num) {
  if ( num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

slidingWindow([2,6,9,2,1,8,5,6,3],3);
