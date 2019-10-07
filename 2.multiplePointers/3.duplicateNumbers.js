// Complexity O(n)
function duplicateNumbers(...args) {
  args = args.sort();

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

duplicateNumbers(182, 281, 123, 21, 281);