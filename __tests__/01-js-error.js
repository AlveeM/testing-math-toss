const { sum, mul } = require('../math');

let actual = sum(1, 2);
let expected = 3;

if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`);
}

actual = mul(2, 3);
expected = 6;
if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`);
}