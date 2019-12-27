/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSoFar = -Infinity;
  let lastContiguousSum = -Infinity;

  nums.forEach((item) => {
    lastContiguousSum = item + lastContiguousSum;
    const maxAmongCandidates = Math.max(maxSoFar, item, lastContiguousSum);
    if (item > lastContiguousSum) {
      lastContiguousSum = item;
    }
    maxSoFar = maxAmongCandidates;
  });
  return maxSoFar;
};

export default maxSubArray;
