/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
const rotate = (numbers, k) => {
  let actualK = k;
  if (k >= numbers.length) {
    actualK = k % numbers.length;
  }
  const left = numbers.slice(numbers.length - actualK);
  const right = numbers.slice(0, numbers.length - actualK);
  left.forEach((item, index) => {
    numbers[index] = item;
  });
  right.forEach((item, index) => {
    numbers[index + actualK] = item;
  });
  return numbers;
};

export default rotate;
