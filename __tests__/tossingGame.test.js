const { tossingGame } = require('../tossing-game');
const utils = require('../utils');

test('returns player 1 if player 1 wins toss more times', () => {
  const originalToss = utils.toss;
  utils.toss = jest.fn((p1, p2) => p1);

  const actual = tossingGame('Calvin', 'Eric');
  const expected = 'Calvin';
  console.log(utils.toss.mock);
  expect(actual).toBe(expected);
  expect(utils.toss).toHaveBeenCalledTimes(2);
  expect(utils.toss).toHaveBeenNthCalledWith(1, 'Calvin', 'Eric');
  expect(utils.toss).toHaveBeenNthCalledWith(2, 'Calvin', 'Eric');

  utils.toss = originalToss;
})

// test('returns player 2 if player 2 wins toss more times', () => {
//   const originalToss = utils.toss;
//   utils.toss = jest.fn((p1, p2) => p2);

//   const actual = tossingGame('Calvin', 'Eric');
//   const expected = 'Eric';
  
//   expect(actual).toBe(expected);
//   expect(utils.toss).toHaveBeenCalledTimes(2);
//   expect(utils.toss).toHaveBeenNthCalledWith(1, 'Calvin', 'Eric');
//   expect(utils.toss).toHaveBeenNthCalledWith(2, 'Calvin', 'Eric');

//   utils.toss = originalToss;
// })
