/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let insertionIndex = 0;
  let currentNumber = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (currentNumber !== nums[i]) {
      currentNumber = nums[i];
      nums[insertionIndex] = nums[i];
      insertionIndex += 1;
    }
  }
  return insertionIndex;
};

export default removeDuplicates;
