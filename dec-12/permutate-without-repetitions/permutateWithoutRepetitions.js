/* eslint-disable no-param-reassign */

function permutateWithoutRepetitions(arr) {
  if (arr.length === 1) {
    return [arr];
  }
  const permutedArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    const restPermutatedArray = permutateWithoutRepetitions(arr.slice(1));
    restPermutatedArray.forEach((item) => {
      permutedArray.push([arr[0], ...item]);
    });
  }
  return permutedArray;
}

export {
  permutateWithoutRepetitions,
};
