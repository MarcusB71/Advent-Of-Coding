const fs = require('fs');
const inputFile = 'data.txt';

const getWinningNums = (line) => {
  const tempLine = line.split(': ');
  const winningAndMyNums = tempLine[1].split('|');
  return winningAndMyNums[0].split(/\s+/).filter((str) => str !== '');
};
const getMyNums = (line) => {
  const tempLine = line.split(': ');
  const winningAndMyNums = tempLine[1].split('|');
  return winningAndMyNums[1].split(/\s+/).filter((str) => str !== '');
};
const checkMatch = (myNums, winningNums) => {
  let allMatches = [];
  myNums.forEach((num) => {
    if (winningNums.includes(num)) {
      allMatches.push(num);
    }
  });
  return allMatches;
};

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const lines = data.split('\n');
  let total = 0;
  let curMatches = [];
  for (let i = 0; i < lines.length; i++) {
    let matchesToAdd = [];
    for (let j = 0; j < curMatches.length; j++) {
      let matches = [];
      const winNums = getWinningNums(lines[i]);
      const nums = getMyNums(lines[i]);
      matches = checkMatch(nums, winNums);
      matchesToAdd.push(matches.length);
    }
    if (curMatches.length != 0) {
      curMatches = curMatches
        .map((x) => (x -= 1))
        .filter((value) => parseInt(value) != 0);
    }
    const winningNums = getWinningNums(lines[i]);
    const myNums = getMyNums(lines[i]);
    const allMatches = checkMatch(myNums, winningNums);
    matchesToAdd.forEach((match) => {
      if (match != 0) {
        curMatches.push(match);
      }
    });
    if (allMatches.length != 0) {
      curMatches.push(allMatches.length);
    }
    total += curMatches.length;
    console.log('curmatches');
    console.log(curMatches);
  }
  total += 208;
  console.log('total: ');
  console.log(total);
});

// Should have just created an array of size 208 which holds the number of times to check for matches on each line, then update as i run each line
