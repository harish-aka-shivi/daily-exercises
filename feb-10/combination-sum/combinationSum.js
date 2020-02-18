/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const outerArray = [];

  candidates.sort((a, b) => a - b);

  const combinationSumInternal = (inputArr, targetInternal, arr) => {
    // including the first element
    if (!inputArr || inputArr.length < 1) {
      return;
    }
    const [firstElement, ...remainingArr] = inputArr;

    if (targetInternal < firstElement) {
      return;
    } if (targetInternal === firstElement) {
      arr.push(targetInternal);
      outerArray.push(arr);
      return;
    }

    combinationSumInternal(inputArr, targetInternal - firstElement, [...arr, firstElement]);
    combinationSumInternal(remainingArr, targetInternal, arr);
  };
  combinationSumInternal(candidates, target, []);
  return outerArray;
};

export default combinationSum;
