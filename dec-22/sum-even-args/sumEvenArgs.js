
function sumEvenArgs(...args) {
  const arrOfArgs = Array.from(args);
  console.log(arrOfArgs);
  return arrOfArgs.filter(item => item % 2 === 0).reduce((acc, item) => acc + item, 0);
}

export {
  sumEvenArgs,
};
