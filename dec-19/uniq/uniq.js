
function uniq(arr) {
  const uniqueKeyObj = {};
  arr.forEach((item) => {
    let strItem = `${item}`;
    if (Object.is(item, -0)) {
      strItem = '-0';
    }
    if (Object.is(item, '+0')) {
      strItem = '+0';
    }
    uniqueKeyObj[strItem] = item;
  });
  const keys = Object.keys(uniqueKeyObj);
  return keys.map(item => uniqueKeyObj[item]);
}

export {
  uniq,
};
