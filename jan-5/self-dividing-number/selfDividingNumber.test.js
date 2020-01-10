import selfDividingNumbers from './selfDividingNumber';

describe('Should give the self dividing numbers', () => {
  it('should solve the following test cases', () => {
    expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  });
});
