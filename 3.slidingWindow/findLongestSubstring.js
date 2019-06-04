// Complexity O(n)
function findLongestSubstring(str) {
  let length = 0;
  let start = 0;
  let i = 0;
  let substr = {};
  while (i < str.length) {
    let char = str[i];
    if (substr[char]) {
      start = Math.max(start, substr[char]);
    }
    length = Math.max(length, i - start + 1);
    substr[char] = i + 1;
    i++;
  }
  return length;
}

findLongestSubstring("aabcdaefa");
