/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  const map = new Map();
  const val = [];
  nums.forEach((item) => {
    let count = map.get(item);
    if (count === 1) {
      val.push(item);
      count += 1;
      map.set(item, count);
    }
    if (!count) {
      map.set(item, 1);
    }
  });
  return val;
};

export default findDuplicates;
