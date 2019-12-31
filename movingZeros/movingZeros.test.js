import moveZeroes from './movingZeros';

describe('Should move the zeroes to the end in-place', () => {
  it('should solve the following test cases', () => {
    const a = [0, 1, 0, 3, 12];
    moveZeroes(a);
    expect(a).toEqual([1, 3, 12, 0, 0]);
  });
});
