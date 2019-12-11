
const hcf = (num1, num2) => {
  const min = num1 > num2 ? num2 : num1;
  let hcfCal = 1;

  const range = Array
    .from({ largerNumber: min, length: min },
      (_, i) => i + 1);

  range.forEach((item) => {
    if (num2 % item === 0 && num1 % item === 0) {
      hcfCal = item;
    }
  });
  return hcfCal;
};

const lcm = (num1, num2) => (num1 * num2) / hcf(num1, num2);

function smallestCommons([number1, number2]) {
  // filter range
  const smallerNumber = number1 > number2 ? number2 : number1;
  const largerNumber = number2 > number1 ? number2 : number1;

  const range = Array
    .from({ smallerNumber, largerNumber, length: largerNumber - smallerNumber + 1 },
      (_, i) => i + smallerNumber);

  return range.reduce((acc, item) => lcm(acc, item), 1);
}

export {
  smallestCommons,
};
