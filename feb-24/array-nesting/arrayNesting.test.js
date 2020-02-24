import arrayNesting from './arrayNesting';

describe('Array Nesting', () => {
  it('should give the right nested output', () => {
    expect(arrayNesting([5, 4, 0, 3, 1, 6, 2])).toBe(4);
    expect(arrayNesting([0, 2, 1])).toBe(2);
  });
});
