/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxProfitAmount = 0;
  let profitAmountSum = 0;
  let minAmount = +Infinity;

  let minAmountLocal = +Infinity;
  let maxProfitLocal = 0;

  prices.forEach((item, index) => {
    if (item < minAmount) {
      minAmount = item;
    }
    if (item - minAmount > maxProfitAmount) {
      maxProfitAmount = item - minAmount;
    }

    if (item < minAmountLocal) {
      minAmountLocal = item;
    }
    if (item - minAmountLocal > maxProfitLocal) {
      maxProfitLocal = item - minAmountLocal;
    } else if (item - minAmountLocal < maxProfitLocal) {
      profitAmountSum += maxProfitLocal;
      minAmountLocal = item;
      maxProfitLocal = 0;
    }
    if (maxProfitLocal > 0 && index === prices.length - 1) {
      profitAmountSum += maxProfitLocal;
    }
  });

  return profitAmountSum > maxProfitAmount ? profitAmountSum : maxProfitAmount;
};

export default maxProfit;
