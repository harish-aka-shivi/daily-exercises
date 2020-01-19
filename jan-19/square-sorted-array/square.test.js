import sortedSquares from './square';

describe('sorted square of number', () => {
  it('should return the sorted square of array', () => {
    expect(sortedSquares([-1, 0, 1, 2])).toEqual([0, 1, 1, 4]);
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });
});
