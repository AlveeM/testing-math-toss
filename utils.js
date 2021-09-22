function toss(p1, p2) {
  const winNum = Math.random();

  if (winNum < 1/2) {
    return p1;
  } else if (winNum < 1) {
    return p2;
  } else {
    return null;
  }
}

module.exports = { toss }