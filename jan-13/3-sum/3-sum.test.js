import threeSum from './3-sum';

describe('three sum', () => {
  it('should return list of distinct numbers', () => {
    const resultOne = threeSum([-1, 0, 1, 2, -1, -4]);
    const sortedResult = resultOne.map(item => item.sort((a, b) => a - b)).sort();
    expect(sortedResult).toEqual([
      [-1, 0, 1].sort((a, b) => a - b),
      [-1, -1, 2].sort((a, b) => a - b),
    ].sort());
  });

  it('should return list of distinct numbers', () => {
    const resultOne = threeSum([0, 0, 0, 0]);
    const sortedResult = resultOne.map(item => item.sort((a, b) => a - b)).sort();
    expect(sortedResult).toEqual([
      [0, 0, 0].sort((a, b) => a - b),
    ].sort());
  });

});
