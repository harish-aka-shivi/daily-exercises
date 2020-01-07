/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const nonZeroArray = nums.filter(item => item !== 0);
  const zeroCount = nums.length - nonZeroArray.length;
  for (let i = 0; i < nonZeroArray.length; i++) {
    nums[i] = nonZeroArray[i];
  }
  const currentCount = nonZeroArray.length;
  for (let i = 0; i < zeroCount; i++) {
    nums[i + currentCount] = 0;
  }
};

export default moveZeroes;
