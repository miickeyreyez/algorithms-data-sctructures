// Complexity O(n)
function averagePair(arr, limit) {
  const rounded = Math.round(limit);
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] + arr[i + 1] == rounded) {
        return true;
      }
  }
  return false;
}