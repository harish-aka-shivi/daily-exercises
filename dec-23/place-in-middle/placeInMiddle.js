
function placeInMiddle(array1, array2) {
  const lengthArray1 = array1.length;
  const pointOfInsertion = Math.floor(lengthArray1 / 2);
  return array1
    .slice(0, pointOfInsertion)
    .concat(array2)
    .concat(array1.slice(pointOfInsertion));
}

export {
  placeInMiddle,
};
