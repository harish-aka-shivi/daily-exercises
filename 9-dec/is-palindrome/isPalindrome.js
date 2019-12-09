
function isPalindrome(toBeCheckedValue) {
  // convert to string
  const toBeCheckedString = `${toBeCheckedValue}`;
  const strings = toBeCheckedString.toLowerCase().split(/\W|_|/);

  const stringArrayFiltered = strings.filter((string) => string);

  const totalLength = stringArrayFiltered.length;
  const halfLength = Math.floor(stringArrayFiltered.length);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < halfLength; i++) {
    if (stringArrayFiltered[i] !== stringArrayFiltered[totalLength - i - 1]) {
      return false;
    }
  }
  return true;
}

export {
  isPalindrome,
};
