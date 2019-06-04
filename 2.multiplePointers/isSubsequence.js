// Complexity O(n)
function isSubsequence(str1, str2) {
  let firstIndex = 0;
  let secondIndex = 0;
  
  if (!str1) {
      return true;
  }

  while (secondIndex < str2.length) {
    if (str2[secondIndex] === str1[firstIndex]) {
        firstIndex++;
    }
    if (str1.length === firstIndex) {
        return true;
    }
    secondIndex++;
  }
}

isSubsequence('sing', 'sting');