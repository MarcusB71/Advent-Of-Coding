const fs = require('fs');
const inputFile = 'data.txt';
const regexGame = /Game (\d+)/;
const regexColors = /(\d+)\s+([a-zA-Z]+)/g;

const getGameNumber = (line) => {
  const gameNum = line.match(regexGame);
  return parseInt(gameNum[1]);
};

const checkValidSet = (num, color) => {
  if (color == 'red') {
    return parseInt(num) <= 12 ? true : false;
  } else if (color == 'green') {
    return parseInt(num) <= 13 ? true : false;
  } else if (color == 'blue') {
    return parseInt(num) <= 14 ? true : false;
  }
};

const checkValidGame = (lines) => {
  let res = 0;
  lines.forEach((line) => {
    withinBounds = true;
    const newLine = line.split(':');
    const allDraws = newLine[1].split(';');
    allDraws.forEach((draw) => {
      setsOfDraws = draw.match(regexColors);
      setsOfDraws.forEach((set) => {
        numAndColor = set.split(' ');
        if (!checkValidSet(numAndColor[0], numAndColor[1])) {
          withinBounds = false;
        }
      });
    });
    if (withinBounds) {
      res += getGameNumber(line);
    }
  });
  return res;
};

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const lines = data.split('\n');
  let total = checkValidGame(lines);
  console.log(total);
});
