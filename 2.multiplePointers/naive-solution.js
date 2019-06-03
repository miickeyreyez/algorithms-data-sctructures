// Time Complexity: O(n^2)
// Space Complexity: O(1)
function multiplePointers(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

multiplePointers([-4,-3,-2,-1,0,1,2,5]);