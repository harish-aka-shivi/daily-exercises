/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  let max = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;

  if (nums.length < 3) {
    nums.forEach((item) => {
      max = item > max ? item : max;
    });
    return max;
  }

  nums.forEach((item) => {
    if (item > max) {
      const tempMax = max;
      const tempMax2 = max2;
      max = item;
      max2 = tempMax;
      max3 = tempMax2;
    } else if (item > max2 && item !== max) {
      const tempMax2 = max2;
      max2 = item;
      max3 = tempMax2;
    } else if (item > max3 && item !== max2 && item !== max) {
      max3 = item;
    }
  });

  return max3 === -Infinity ? max : max3;
};

export default thirdMax;
