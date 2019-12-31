/* eslint-disable no-plusplus */
function getPascalTriangleSum(arr) {
  const output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    output.push(arr[i] + arr[i + 1]);
  }
  return output;
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const pascalTriangle = [];

  if (numRows > 0) {
    pascalTriangle.push([1]);
  }

  if (numRows > 1) {
    pascalTriangle.push([1, 1]);
  }

  for (let i = 3; i <= numRows; i++) {
    let row = [];
    row = [1, ...getPascalTriangleSum(pascalTriangle[i - 2]), 1];
    pascalTriangle.push(row);
  }
  return pascalTriangle;
};

export default generate;
