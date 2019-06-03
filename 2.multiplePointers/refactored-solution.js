// Time Complexity: O(n)
// Space Complexity: O(1)
function multiplePointers(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

multiplePointers([-4,-3,-2,-1,0,1,2,5]);