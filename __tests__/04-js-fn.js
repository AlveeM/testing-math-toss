const assert = require('assert');

const { tossingGame } = require('../tossing-game');
const utils = require('../utils');

const originalToss = utils.toss;
utils.toss = fn((p1, p2) => p1);

const winner = tossingGame('Calvin', 'Eric');
assert.strictEqual(winner, 'Calvin');
assert.deepStrictEqual(utils.toss.mock.calls, [
  ['Calvin', 'Eric'],
  ['Calvin', 'Eric']
])

function fn(mockFunc) {
  const mockFuncModified = (...args) => {
    mockFuncModified.mock.calls.push(args);
    return mockFunc(...args);
  }

  mockFuncModified['mock'] = { calls: [] };  
  return mockFuncModified;
}

utils.toss = originalToss;
