const fs = require('fs');
const inputFile = 'data.txt';
const regexGame = /Game (\d+)/;
const regexColors = /(\d+)\s+([a-zA-Z]+)/g;

const updateMinColor = (num, min) => {
  return num > min ? num : min;
};

const checkMinCubes = (lines) => {
  let res = 0;
  lines.forEach((line) => {
    minRed = 1;
    minBlue = 1;
    minGreen = 1;
    const newLine = line.split(':');
    const allDraws = newLine[1].split(';');
    allDraws.forEach((draw) => {
      setsOfDraws = draw.match(regexColors);
      setsOfDraws.forEach((set) => {
        numAndColor = set.split(' ');
        if (numAndColor[1] == 'red') {
          minRed = updateMinColor(parseInt(numAndColor[0]), minRed);
        } else if (numAndColor[1] == 'blue') {
          minBlue = updateMinColor(parseInt(numAndColor[0]), minBlue);
        } else if (numAndColor[1] == 'green') {
          minGreen = updateMinColor(parseInt(numAndColor[0]), minGreen);
        }
      });
    });
    res += minRed * minBlue * minGreen;
  });
  return res;
};

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const lines = data.split('\n');

  let total = checkMinCubes(lines);
  console.log(total);
});
