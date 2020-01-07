import isPalindrome from './isPallindrome';

describe('Check whether a number is palindrome', () => {
  it('solve the following cases', () => {
    expect(isPalindrome(-23)).toBe(false);
    expect(isPalindrome(-0)).toBe(false);
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(121)).toBe(true);
  });
});
