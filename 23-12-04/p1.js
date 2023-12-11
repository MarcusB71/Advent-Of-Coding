const fs = require('fs');
const inputFile = 'data.txt';

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const lines = data.split('\n');
  let total = 0;

  lines.forEach((line) => {
    let allMatches = [];
    let lineTotal = 0;
    const tempLine = line.split(': ');
    const winningAndMyNums = tempLine[1].split('|');
    const winningNums = winningAndMyNums[0]
      .split(/\s+/)
      .filter((str) => str !== '');
    const myNums = winningAndMyNums[1].split(/\s+/).filter((str) => str !== '');

    myNums.forEach((num) => {
      if (winningNums.includes(num)) {
        allMatches.push(num);
      }
    });

    allMatches.forEach(() => {
      if (lineTotal == 0) {
        lineTotal = 1;
      } else {
        lineTotal *= 2;
      }
    });
    total += lineTotal;
  });
  console.log('total: ');
  console.log(total);
});
