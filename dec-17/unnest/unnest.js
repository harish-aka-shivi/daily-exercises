
function unnest(arr) {
  if (arr instanceof Array) {
    return arr.reduce((acc, item, index) => {
      if (item[Symbol.iterator]) {
        return [...acc, ...item];
      }
      if (item.length) {
        return [...acc, ...item[index]];
      }
      return acc.concat(item);
    }, []);
  }
  if (arr.length) {
    const range = Array.from({ length: arr.length }, (v, i) => i);
    return range.reduce((acc, item) => {
      if (arr[item][Symbol.iterator]) {
        return [...acc, ...arr[item]];
      }
      return acc.concat(item);
    }, []);
  }
  return [];
}

export {
  unnest,
};
