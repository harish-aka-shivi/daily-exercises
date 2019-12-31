import maxProfit from './timeToSellStocks';

describe('Find the max profit after selling stock once', () => {
  it('should give right result for following cases', () => {
    expect(maxProfit([7, 6, 1, 5, 3, 4])).toEqual(4);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    expect(maxProfit([])).toEqual(0);
    expect(maxProfit([1])).toEqual(0);
  });
});
