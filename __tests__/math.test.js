const { sum } = require('../math');

describe('sum tests', () => {
  test('sum adds two numbers', () => {
    const actual = sum(2, 3);
    const expected = 5;
    expect(actual).toBe(expected);
  })

  test('sum works for negative numbers', () => {
    const actual = sum(-1, -1);
    const expected = -2;
    expect(actual).toBe(expected);
  })
})
