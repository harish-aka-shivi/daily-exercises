
const defaultCompareFunction = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

function binarySearch(arr, elementToFind, comparator = defaultCompareFunction) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr.length === 1) {
    return comparator(arr[0], elementToFind) === 0 ? 0 : -1;
  }

  const midElementIndex = Math.floor(arr.length / 2);
  if (comparator(arr[midElementIndex], elementToFind) === 0) {
    return midElementIndex;
  }
  if (comparator(arr[midElementIndex], elementToFind) === 1) {
    const solution = binarySearch(arr.slice(0, midElementIndex), elementToFind, comparator);
    return solution === -1 ? -1 : solution;
  }
  const solution = binarySearch(arr.slice(midElementIndex + 1, arr.length),
    elementToFind, comparator);
  return solution === -1 ? -1 : midElementIndex + 1 + solution;
}

export {
  binarySearch,
};
