/**
 * @param {number} num
 * @return {boolean}
 */

const isPerfectSquare = (num) => {
  if (num === 1) {
    return 1;
  }

  const binarySearch = (start, end) => {
    if (end < start) {
      return -1;
    }

    if (start === end) {
      return start * start === num ? start : -1;
    }

    const mid = Math.floor((start + end) / 2);
    if (mid === start) {
      if (start === num) {
        return start;
      } if (end === num) {
        return end;
      }
      return -1;
    }

    const halfSquared = mid * mid;

    if (halfSquared < num) {
      return binarySearch(mid, end);
    } if (halfSquared > num) {
      return binarySearch(start, mid);
    }

    return mid;
  };

  const perfectSquare = binarySearch(0, num);

  return perfectSquare === -1 ? false : perfectSquare;
};

export default isPerfectSquare;
