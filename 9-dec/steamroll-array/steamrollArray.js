
function flatten(arrayItem) {
  if (!(arrayItem instanceof Array)) {
    return [arrayItem];
  }

  return arrayItem.reduce((acc, item) => [...acc, ...flatten(item)], []);
}

function steamrollArray(arr) {
  return arr.reduce((acc, item) => [...acc, ...flatten(item)], []);
}

export {
  steamrollArray,
};
