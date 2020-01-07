import maxSubArray from './maximumSubArray';

describe('Find the max sum of contiguous array', () => {
  it('should give right result for following cases', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([2, 3])).toBe(5);
    expect(maxSubArray([-1, 0])).toBe(0);
  });
});
