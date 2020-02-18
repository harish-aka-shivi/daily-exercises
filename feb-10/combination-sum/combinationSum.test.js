import combinationSum from './combinationSum';

describe('Test the combination sum', () => {
  it('should give the right combination sum', () => {
    expect(combinationSum([8, 7, 4, 3], 11)).toEqual([[3, 4, 4], [3, 8], [4, 7]]);
    expect(combinationSum([2, 3, 6, 7], 7).length).toBe(2);

    const expected2 = [[7], [2, 2, 3]];
    expected2.forEach((item) => {
      expect(combinationSum([2, 3, 6, 7], 7)).toEqual(expect.arrayContaining([item]));
    });
  });
});
