import baseballGame from './baseballGame';

describe('solves the baseball game question', () => {
  it('should solve the following test cases', () => {
    expect(baseballGame(['-60', 'D', '-36', '30', '13', 'C', 'C', '-33', '53', '79'])).toEqual(-117);
    expect(baseballGame(['5', '2', 'C', 'D', '+'])).toEqual(30);
  });
});
