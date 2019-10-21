function naiveSearch(string, toSearch) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for(let j = 0; j < toSearch.length; j++) {
      if (string[i + j] !== toSearch[j]) {
        break;
      }

      if(j === toSearch.length - 1) {
        count++;
      }
    }
  }
  
  return count;
}

naiveSearch('Hello world', 'world');
