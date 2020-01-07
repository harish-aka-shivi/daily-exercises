import removeDuplicates from './removeDuplicates';

describe('Find the largest common prefix', () => {
  it('should give right result for following cases', () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 5])).toEqual(3);
    expect(removeDuplicates([])).toEqual(0);
    expect(removeDuplicates([0, 0, 0, 0])).toBe(1);
    expect(removeDuplicates([-1, -1, 0, 4, 4, 4, 5])).toBe(4);
  });
});
