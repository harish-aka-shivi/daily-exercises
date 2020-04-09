import alienAlphabets from './alienAlphabets';

describe('alien alphabets test', () => {
  it('tests for alphabets', () => {
    const words = ['baa', 'abcd', 'abca', 'cab', 'cad'];
    expect(alienAlphabets(words).join('')).toBe('bdac');
    const words2 = ['caa', 'aaa', 'aab'];
    expect(alienAlphabets(words2).join('')).toBe('cab');
  });
});
