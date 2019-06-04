function maxSubarraySum(elements, nElements) {
  if (elements.length < nElements) {
    return null;
  }
  let maxSum = 0;
  let total = 0;

  for (let i = 0; i < nElements; i++) {
    maxSum += elements[i];
  }

  total = maxSum;

  for (let i = nElements; i < elements.length; i++) {
    total += elements[i] - elements[i - nElements];
    maxSum = maxSum > total ? maxSum : total;
  }
  return maxSum;
}

maxSubarraySum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
