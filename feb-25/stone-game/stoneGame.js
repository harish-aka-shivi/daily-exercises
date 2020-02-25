/**
 * @param {number[]} piles
 * @return {boolean}
 */

// one trick behind this problem is that piles.length is always even
// so alex can choose all even and all odd, but lee wont have a choice.
// for example if alex stats will 0, lee can choose 1 or n-1, which are both odd.
// So alex can restrict lee to choose all odd and all even.
// So the solution becomes which has the more stones, piles at odd position or
// piles at even position
// So it can be sum(piles[odd]) > sum(piles[even]) or sum(piles[odd]) < sum(piles[even]).
// So Alex can always will the game, depending which position he starts with.

// eslint-disable-next-line no-unused-vars
const stoneGame = piles => true;

export default stoneGame;
