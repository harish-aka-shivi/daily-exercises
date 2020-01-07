/**
 * @param {number} n
 * @return {string[]}
 */
const generateParentheses = (number) => {
  const allParen = (n) => {
    if (n < 1) {
      return [];
    }
    if (n === 1) {
      return ['()', ')(', '((', '))'];
    }

    const s = allParen(1).reduce((acc, item) => {
      const arr = allParen(n - 1).reduce(
        (acc2, item2) => acc2.concat(item + item2),
        [],
      );
      return [...acc, ...arr];
    }, []);

    return s;
  };

  const isValid = (eq) => {
    const arr = eq.split('');
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(') {
        sum += 1;
      } else {
        sum -= 1;
      }
      if (sum < 0) {
        return false;
      }
    }
    return sum === 0;
  };

  const validParanthese = function (brackets) {
    return brackets.filter(bracket => isValid(bracket));
  };

  const allParens = allParen(number);

  return validParanthese(allParens);
};

export default generateParentheses;
