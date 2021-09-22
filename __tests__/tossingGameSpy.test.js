const { tossingGame } = require('../tossing-game');
const utils = require('../utils');

test('returns player 1 if player 1 wins toss more times', () => {
  jest.spyOn(utils, 'toss');
  utils.toss.mockImplementation((p1, p2) => p1);

  const actual = tossingGame('Calvin', 'Eric');
  const expected = 'Calvin';
  
  expect(actual).toBe(expected);

  expect(utils.toss).toHaveBeenCalledTimes(2);
  expect(utils.toss).toHaveBeenNthCalledWith(1, 'Calvin', 'Eric');
  expect(utils.toss).toHaveBeenNthCalledWith(2, 'Calvin', 'Eric');

  utils.toss.mockRestore();
})
