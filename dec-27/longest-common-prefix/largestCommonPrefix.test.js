import largestCommonPrefix from './longestCommonPrefix';

describe('Find the largest common prefix', () => {
  it('should give right result for following cases', () => {
    expect(largestCommonPrefix(['a', 'b'])).toBe('');
    expect(largestCommonPrefix([])).toBe('');
    expect(largestCommonPrefix(['hello'])).toBe('hello');
    expect(largestCommonPrefix(['hello', 'hi'])).toBe('h');
    expect(largestCommonPrefix(['', ''])).toBe('');
  });
});
