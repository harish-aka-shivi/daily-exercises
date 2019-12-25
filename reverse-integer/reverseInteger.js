/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  if (Object.is(-0, x)) {
    return -0;
  }
  if (Object.is(0, x)) {
    return 0;
  }
  if (x / ((2 ** 31) - 1) > 1
    || x / (-1 * (2 ** 31) > 1)) {
    return 0;
  }
  let num = Math.abs(x);
  const sign = Math.sign(x);
  let sol = '';
  while (num % 10 !== 0 || num / 10 !== 0) {
    const quotient = Math.floor(num / 10);
    const remainder = num % 10;
    sol = `${sol}${remainder}`;
    num = quotient;
  }
  const parsedInt = Number.parseInt(sol, 10);

  return sign * parsedInt;
};

export default reverse;
