const fs = require('fs');
const inputFile = 'data.txt';

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const [time, distance] = data
    .split('\n')
    .map((x) => x.split(':')[1].trim().replace(/ /g, ''));

  let highestWinNum = 0;
  let lowestWinNum = 0;
  for (let i = 0; i < time; i++) {
    let distanceTraveled = (time - i) * i;
    if (distanceTraveled > distance) {
      lowestWinNum = i;
      break;
    }
  }
  for (let j = time; j > 0; j--) {
    let distanceTraveled = (time - j) * j;
    if (distanceTraveled > distance) {
      highestWinNum = j;
      break;
    }
  }
  console.log(highestWinNum - lowestWinNum + 1);
});
