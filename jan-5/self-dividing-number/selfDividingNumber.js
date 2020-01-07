const getNumberDigits = (num) => {
  let divisor = num;
  const numbers = [];
  while (divisor / 10 !== 0 || divisor % 10 !== 0) {
    const remainder = divisor % 10;
    divisor = Math.floor(divisor / 10);
    numbers.push(remainder);
  }
  return numbers;
};

/**
   * @param {number} left
   * @param {number} right
   * @return {number[]}
   */
const selfDividingNumbers = (left, right) => {
  const sol = [];
  const range = Array.from({ length: right - left + 1 }, (_, i) => left + i);
  range.forEach((number) => {
    const numbers = getNumberDigits(number);
    const isSelfDividing = numbers.reduce((acc, item) => acc && number % item === 0, true);
    if (isSelfDividing) {
      sol.push(number);
    }
  });
  return sol;
};

export default selfDividingNumbers;
