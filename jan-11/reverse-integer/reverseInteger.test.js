import reverse from './reverseInteger';

describe('Find the reverse of a number', () => {
  it('solve the following cases', () => {
    expect(reverse(-23)).toBe(-32);
    expect(reverse(-0)).toBe(-0);
    expect(reverse(0)).toBe(0);
    expect(reverse(121)).toBe(121);
    expect(reverse(3445)).toBe(5443);
  });
});
