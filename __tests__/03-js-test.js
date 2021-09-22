const { sum, mul } = require('../math');

test('sum adds two numbers', () => {
  const actual = sum(2, 3);
  const expected = 6;
  expect(actual).toBe(expected);
});

test('mul multiplies two numbers', () => {
  const actual = mul(2, 3);
  const expected = 6;
  expect(actual).toBe(expected);
});



function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`)
  } catch(error) {
    console.error(error);
    console.log(`x ${title}`)
  }
}



function expect(actualValue) {
  return {
    toBe(expectedValue) {
      if (actualValue !== expectedValue) {
        throw new Error(`${actualValue} is not equal to ${expectedValue}`);
      }
    }
  }
}
