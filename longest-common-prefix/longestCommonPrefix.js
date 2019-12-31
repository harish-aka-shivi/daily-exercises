function findCommonPrefix(str1, str2) {
  if (str1 === '' || str2 === '') {
    return '';
  }
  const smallerStr = str1.length > str2.length ? str2 : str1;
  const largerStr = str1.length <= str2.length ? str2 : str1;

  let commonPrefix = '';
  let continueFlag = true;
  let index = 1;
  while (continueFlag) {
    const splittedString = smallerStr.slice(0, index);
    if (largerStr.startsWith(splittedString)) {
      commonPrefix = splittedString;
      index += 1;
    } else {
      continueFlag = false;
    }
    if (splittedString === smallerStr) {
      continueFlag = false;
    }
  }
  return commonPrefix;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return '';
  }
  let commonPrefixLargest = strs[0];

  strs.forEach((str) => {
    commonPrefixLargest = findCommonPrefix(commonPrefixLargest, str);
  });
  return commonPrefixLargest;
};

export default longestCommonPrefix;
