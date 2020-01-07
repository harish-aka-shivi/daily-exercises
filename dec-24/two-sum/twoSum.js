/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let index = 0;
  for (const num of nums) {
    const remainingNum = target - num;
    const indexOfRemainingNumber = nums.slice(index + 1).indexOf(remainingNum);
    if (indexOfRemainingNumber !== -1) {
      const actualIndexNumber = indexOfRemainingNumber + index + 1;
      return index > actualIndexNumber
        ? [actualIndexNumber, index]
        : [index, actualIndexNumber];
    }
    index += 1;
  }
  return -1;
};

export {
  twoSum,
};
