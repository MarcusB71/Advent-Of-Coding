const fs = require('fs');
const inputFile = 'data.txt';

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const regex = /([A-Z]+) = \(([A-Z]+), ([A-Z]+)\)/;

  const instructions = data.split('\n')[0].split('');
  let lines = data.split('\n');
  lines.splice(0, 2);
  mapValues = [];
  lines.forEach((line) => {
    const match = line.match(regex);
    mapValues.push([match[1], match[2], match[3]]);
  });

  const map = new Map();
  for (let i = 0; i < mapValues.length; i++) {
    map.set(mapValues[i][0], [mapValues[i][1], mapValues[i][2]]);
  }
  let done = false;
  let steps = 0;
  curVal = 'AAA';
  i = 0;
  while (!done) {
    if (instructions[i] == 'L') {
      curVal = map.get(curVal)[0];
    } else {
      curVal = map.get(curVal)[1];
    }
    if (curVal == 'ZZZ') {
      done = true;
    }
    i++;
    if (i == 307) {
      i = 0;
    }
    steps++;
  }
  console.log(steps);
});
