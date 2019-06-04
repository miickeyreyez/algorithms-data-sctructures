// Complexity O(n^2)
function isSubstring(str1, str2) {
  let firstIndex = 0;
  let secondIndex = 0;
  let lastIndex = -1;
  let arr = [];
  
  if (!str1) {
      return true;
  }
  
  for (let i = 0; i < str2.length; i++) {
      if (str2[i] === str1[0]) {
        arr.push(i);
      }
  }

  for (let index of arr) {
    for (let i = index; i < index + str1.length; i++) {
        if (str2[i] === str1[firstIndex]) {
            firstIndex++;
        } else {
            break;
        }
        if (firstIndex === str1.length) {
            return true;
        }
    }
    firstIndex = 0;     
  }
}

isSubstring('hello', 'hello world');
