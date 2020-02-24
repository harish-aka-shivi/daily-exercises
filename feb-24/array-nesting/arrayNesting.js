/**
 * @param {number[]} nums
 * @return {number}
 */

const findNestCount = (nums, startIndex) => {
  let count = 0;
  const hashMap = {};
  let reducedAcc = startIndex;

  while (!hashMap[reducedAcc]) {
    count += 1;
    hashMap[reducedAcc] = true;
    reducedAcc = nums[reducedAcc];
  }
  return count;
};

const arrayNesting = (nums) => {
  let longestCount = Number.MIN_SAFE_INTEGER;

  nums.forEach((item) => {
    const countResult = findNestCount(nums, item);
    longestCount = countResult > longestCount ? countResult : longestCount;
  });

  return longestCount;
};

export default arrayNesting;
