/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let index = 0;
  for (const num of nums) {
    const remainingNum = target - num;
    const indexOfRemainingNumber = nums.indexOf(remainingNum);
    if (indexOfRemainingNumber !== -1) {
      return index > indexOfRemainingNumber
        ? [indexOfRemainingNumber, index]
        : [index, indexOfRemainingNumber];
    }
    index += 1;
  }
  return -1;
};

export {
  twoSum,
};
