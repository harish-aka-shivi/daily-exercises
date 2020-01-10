import rotate from './rotateArray';

describe('should rotate an array by k units', () => {
  it('should do it in O(1) space complexity', () => {
    const a = [1, 2];
    expect(rotate(a, 3)).toBe(a);
  });
  it('should pass the following test cases', () => {
    expect(rotate([1, 2, 3], 1)).toEqual([3, 1, 2]);
    expect(rotate([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(rotate([1, 2, 3], 5)).toEqual([2, 3, 1]);
  });
});
