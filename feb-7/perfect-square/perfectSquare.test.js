import isPerfectSquare from './perfectSquare';

describe('should return the perfect square root', () => {
  it('should pass the following test cases', () => {
    expect(isPerfectSquare(14)).toBe(false);
    expect(isPerfectSquare(16)).toBe(4);
  });
});
