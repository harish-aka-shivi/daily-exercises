import maxProfit from './timeToSellStocks2';

describe('Find the max profit after selling stock multiple times', () => {
  it('should give right result for following cases', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    expect(maxProfit([6, 1, 3, 2, 4, 7])).toEqual(7);
  });
});
