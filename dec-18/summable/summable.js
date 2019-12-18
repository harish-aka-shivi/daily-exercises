
function summable({ target, array }) {
  const filteredArray = array.filter(item => item < target);
  const isSubsetSum = (arr1, n, sum) => {
    if (sum === 0) {
      return true;
    }
    if (n === 0 && sum !== 0) {
      return false;
    }
    return isSubsetSum(arr1, n - 1, sum) || isSubsetSum(arr1, n - 1, sum - arr1[n - 1]);
  };
  return isSubsetSum(filteredArray, filteredArray.length, target);
}

export {
  summable,
};
