const { sum, mul } = require('../math');

let actual, expected;

actual = sum(1, 2);
expected = 3;
expect(actual).toBe(expected);

actual = mul(2, 3);
expected = 6;
expect(actual).toBe(expected);

function expect(actualValue) {
  return {
    toBe(expectedValue) {
      if (actualValue !== expectedValue) {
        throw new Error(`${actualValue} is not equal to ${expectedValue}`);
      }
    }
  }
}
