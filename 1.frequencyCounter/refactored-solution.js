// Complexity O(n)
function frequencyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; 
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2) || (frequencyCounter2[key ** 2] !== frequencyCounter1[key])) {
            return false;
        }
    }
    return true;
}

frequencyCounter([1,2,3,2,5], [9,1,4,4,25]);