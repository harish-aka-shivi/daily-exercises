import stoneGame from './stoneGame';

describe('Stone Game', () => {
  it('should return true/false depending on alex can win the game', () => {
    expect(stoneGame([5, 3, 4, 5, 5, 6])).toEqual(true);
    expect(stoneGame([5, 3, 4, 5])).toEqual(true);
  });
});
