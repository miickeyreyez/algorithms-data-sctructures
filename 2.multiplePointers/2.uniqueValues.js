// Time Complexity: O(n)
// Space Complexity: O(1)
function countUniqueValues(arr) {
  let counter = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) {
      counter++;
    }

    i++;
  }

  return counter;
}

countUniqueValues([-4, -3, -2, -1, 0, 1, 2, 5]);
