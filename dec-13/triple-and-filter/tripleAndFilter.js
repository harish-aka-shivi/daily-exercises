
function tripleAndFilter(numbers) {
  return numbers
    .map((number => number * 3))
    .filter(number => number % 5 === 0);
}

export {
  tripleAndFilter,
};
