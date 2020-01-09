import findDuplicates from './duplicateInArray';

describe('find duplicate in an array', () => {
  it('find the numbers in array which appear twice', () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  });
});
