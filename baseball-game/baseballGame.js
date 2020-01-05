/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  const pointsActualList = [];
  ops.forEach((operation, index) => {
    if (operation === '+') {
      let i = index - 1;
      const lastTwoValues = [];
      while (i >= 0 && lastTwoValues.length < 2) {
        if (pointsActualList[i]) {
          lastTwoValues.push(pointsActualList[i]);
        }
        i -= 1;
      }
      let sum = 0;
      if (lastTwoValues.length > 0) {
        sum += lastTwoValues[0];
      }
      if (lastTwoValues.length > 1) {
        sum += lastTwoValues[1];
      }
      pointsActualList[index] = sum;
    } else if (operation === 'C') {
      let i = index - 1;
      while (i >= 0 && !pointsActualList[i]) {
        i -= 1;
      }
      pointsActualList[i] = null;
    } else if (operation === 'D') {
      let i = index - 1;
      while (i >= 0 && !pointsActualList[i]) {
        i -= 1;
      }
      if (pointsActualList[i]) {
        pointsActualList[index] = pointsActualList[i] * 2;
      }
    } else {
      pointsActualList[index] = parseInt(operation, 10);
    }
  });
  return pointsActualList.reduce((acc, item) => (item ? acc + item : acc), 0);
};

export default calPoints;
