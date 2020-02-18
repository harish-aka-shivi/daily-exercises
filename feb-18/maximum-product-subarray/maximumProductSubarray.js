/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let maxSoFar = Number.MIN_SAFE_INTEGER;
  let minSoFar = Number.MAX_SAFE_INTEGER;
  let maxProductOutput = Number.MIN_SAFE_INTEGER;
  nums.forEach((num) => {
    if (num < 0) {
      const temp = minSoFar;
      minSoFar = maxSoFar;
      maxSoFar = temp;
    }

    minSoFar = Math.min(num, num * minSoFar);
    maxSoFar = Math.max(num, num * maxSoFar);
    maxProductOutput = Math.max(maxSoFar, maxProductOutput);
  });
  return maxProductOutput;
};

export default maxProduct;
