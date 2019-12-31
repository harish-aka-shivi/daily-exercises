/* eslint-disable no-plusplus */
/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = function (prices) {
//   let maxSoFar = -Infinity;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       maxSoFar = prices[j] - prices[i] > maxSoFar ? prices[j] - prices[i] : maxSoFar;
//     }
//   }
//   return maxSoFar > 0 ? maxSoFar : 0;
// };

// better solution
const maxProfit = function (prices) {
  let maxProfitAmount = 0;
  let minPrice = +Infinity;
  prices.forEach((item) => {
    if (item < minPrice) {
      minPrice = item;
    }
    if (item - minPrice > maxProfitAmount) {
      maxProfitAmount = item - minPrice;
    }
  });
  return maxProfitAmount;
};

export default maxProfit;
