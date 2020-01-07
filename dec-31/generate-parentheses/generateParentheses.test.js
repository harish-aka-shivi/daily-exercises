import generateParentheses from './generateParentheses';

describe('should generate the valid parentheses', () => {
  it('should pass the following test cases', () => {
    expect(generateParentheses(3)).toEqual([
      '()()()', '()(())', '((()))', '(()())', '(())()',
    ]);
  });
});
