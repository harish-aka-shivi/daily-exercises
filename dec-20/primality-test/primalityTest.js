
function primalityTest(num) {
  const abstractNumber = Math.abs(num);

  if (abstractNumber === 1 || abstractNumber === 0) {
    return false;
  }
  let i = 2;
  while (i < abstractNumber) {
    if (abstractNumber % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

export {
  primalityTest,
};
