/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = (matrix) => {
  const resultMatrix = [];
  matrix.forEach((column, columnIndex) => {
    column.forEach((row, rowIndex) => {
      if (!resultMatrix[rowIndex]) {
        resultMatrix[rowIndex] = [];
      }
      resultMatrix[rowIndex][columnIndex] = matrix[columnIndex][rowIndex];
    });
  });
  return resultMatrix;
};

export default transpose;
