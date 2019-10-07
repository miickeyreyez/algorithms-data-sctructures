// Complexity O(n)
function averagePair(arr, limit) {
  const rounded = Math.round(limit);

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[i + 1]) === rounded) {
      return true;
    }
  }

  return false;
}

averagePair([-1, 0, 3, 4, 5, 6], 4.1);