import thirdMax from './thirdMaximumNumber';

describe('Find the third maximum amoung a list', () => {
  it('should be third maximum on the list', () => {
    expect(thirdMax([1, 2, 2, 5, 3, 5])).toBe(2);
    expect(thirdMax([0])).toBe(0);
    expect(thirdMax([1, 2])).toBe(2);
    expect(thirdMax([1, 2, 3])).toBe(1);
    expect(thirdMax([1, 2, 2, 2])).toBe(2);

  });
});
