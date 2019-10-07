// Complexity O(n)
function isSubsequence(str1, str2) {
  let firstIndex = 0;
  let secondIndex = 0;
  
  if (!str1) {
    return true;
  }

  while (secondIndex < str2.length) {
    if (str1[firstIndex] === str2[secondIndex]) {
      firstIndex++;
    }

    if (str1.length === firstIndex) {
        return true;
    }

    secondIndex++;
  }
  
  return false;
}

isSubsequence('sing', 'sting');