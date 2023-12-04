// "-" is a symbol, but does it also indicate a negative number?
const { match } = require('assert');
const fs = require('fs');
const inputFile = 'data.txt';
const outputFile = 'test.txt';

//cant have /g otherwise it maintains an index
const regex = /[!@#$%^\*&+\-=/]/;
const regex2 = /\d+/g;

const checkForSymbol = (line, firstIdx, range) => {
  if (firstIdx != 0) {
    if (regex.test(line[firstIdx - 1])) {
      return true;
    }
  }
  if (firstIdx + range + 1 != line.length - 1) {
    if (regex.test(line[firstIdx + range])) {
      return true;
    }
  }
  for (let k = firstIdx; k < range + firstIdx; k++) {
    if (regex.test(line[k])) {
      return true;
    }
  }
  return false;
};

const checkForNum = (lines) => {
  total = 0;
  for (let i = 0; i < lines.length; i++) {
    //create array of matched numbers
    const matches = lines[i].match(regex2);
    matches.forEach((match) => {
      let symbolExists = false;
      //find first index of matched number
      //issue: what if number is repeated twice, search will always find first instance
      const firstIdx = lines[i].search(match);
      const range = match.length;
      if (!symbolExists && i != 0) {
        //check if symbol exists in previous line
        symbolExists = checkForSymbol(lines[i - 1], firstIdx, range);
      }
      if (!symbolExists) {
        //check if symbol exists in current line
        symbolExists = checkForSymbol(lines[i], firstIdx, range);
      }
      if (!symbolExists && i != 139) {
        //check if symbol exists in next line
        symbolExists = checkForSymbol(lines[i + 1], firstIdx, range);
      }
      if (symbolExists) {
        //replace number and add number to total
        total += parseInt(match);
        for (let z = firstIdx; z < firstIdx + range; z++) {
          lines[i] = lines[i].substring(0, z) + 'T' + lines[i].substring(z + 1);
        }
      }
    });
    // fs.writeFileSync(__dirname + '\\' + outputFile, lines[i] + '\n', {
    //   flag: 'a',
    // });
  }
  return total;
};

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const lines = data.split('\n');
  const total = checkForNum(lines);
  console.log(total);
});
