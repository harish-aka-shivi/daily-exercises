/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const sign = Math.sign(x);
  if (sign === -1 || Object.is(sign, -0)) {
    return false;
  }

  const numberString = x.toString();

  const strArray = numberString.split('');

  let start = 0;
  let end = strArray.length - 1;

  while (start <= end) {
    if (strArray[start] !== strArray[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};

export default isPalindrome;
