/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  if (nums.length < 2) {
    return '';
  }
  nums.sort((a, b) => a - b);
  nums.reverse();
  return nums.reduce((acc, item, index) => (index % 2 !== 0 ? acc + item : acc), 0);
};

export default arrayPairSum;
