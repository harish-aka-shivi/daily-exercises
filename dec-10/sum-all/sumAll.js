
function sumAll([number1, number2]) {
  const lowerBound = number1 > number2 ? number2 : number1;
  const upperBound = number2 >= number1 ? number2 : number1;

  let i = lowerBound;
  let sum = 0;
  while (i <= upperBound) {
    sum += i;
    i += 1;
  }
  return sum;
}

export {
  sumAll,
};
