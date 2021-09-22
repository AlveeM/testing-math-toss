const utils = require('./utils');

function tossingGame(p1, p2) {
  const numsToWin = 2;
  let p1Wins = 0;
  let p2Wins = 0;

  while (p1Wins < numsToWin && p2Wins < numsToWin) {
    const winner = utils.toss(p1, p2);
    if (winner === p1) {
      p1Wins += 1;
    } else if (winner === p2) {
      p2Wins += 1;
    }
  }

  return p1Wins > p2Wins ? p1 : p2;
}

module.exports = { tossingGame };