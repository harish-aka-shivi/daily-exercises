import maxProduct from './maximumProductSubarray';

describe('Max Product subarray', () => {
  it('should pass the following test cases', () => {
    expect(maxProduct([2, 3, -2, 4])).toEqual(6);
    expect(maxProduct([-2, 0, -1])).toEqual(0);
  });
});
