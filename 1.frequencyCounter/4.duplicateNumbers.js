// Complexity O(n)
function duplicateNumbers(...args) {
  const arr = args.sort();
  const numbers = {};

  for (let i = 0; i < arr.length; i++) {
    numbers[arr[i]] ? numbers[arr[i]] +=1 : numbers[arr[i]] = 1;
  }

  for (let number in numbers) {
    if (numbers[number] > 1) {
      return true;
    }
  }

  return false;
}

duplicateNumbers(182,281, 123, 21, 281);