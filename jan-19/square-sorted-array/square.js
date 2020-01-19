/**
 * @param {number[]} inpArr
 * @return {number[]}
 */
const sortedSquares = (inpArr) => {
  const outputArr = [];
  const negArr = [];
  let i = 0;
  while (i < inpArr.length) {
    const sq = inpArr[i] * inpArr[i];
    if (Math.sign(inpArr[i]) === -1) {
      negArr.push(inpArr[i] * inpArr[i]);
      i += 1;
    } else if (negArr && negArr.length > 0 && sq >= negArr[negArr.length - 1]) {
      const reverseNum = negArr.pop();
      outputArr.push(reverseNum);
    } else {
      outputArr.push(inpArr[i] * inpArr[i]);
      i += 1;
    }
  }
  if (negArr.length > 0) {
    let j = negArr.length - 1;
    while (j >= 0) {
      outputArr.push(negArr[j]);
      j -= 1;
    }
  }
  return outputArr;
};

export default sortedSquares;
