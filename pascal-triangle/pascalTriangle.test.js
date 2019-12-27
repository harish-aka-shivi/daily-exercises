import pascalTriangle from './pascalTriangle';

describe('Find the max sum of contiguous array', () => {
  it('should give right result for following cases', () => {
    expect(pascalTriangle(0)).toEqual([]);
    expect(pascalTriangle(1)).toEqual([[1]]);
    expect(pascalTriangle(2)).toEqual([[1], [1, 1]]);
    expect(pascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    expect(pascalTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});
