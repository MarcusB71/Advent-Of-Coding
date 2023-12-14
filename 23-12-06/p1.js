const fs = require('fs');
const inputFile = 'data.txt';

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const [time, distance] = data.split('\n').map((x) =>
    x
      .split(':')[1]
      .trim()
      .split(/\s+/)
      .map((y) => parseInt(y))
  );
  let res = 1;
  for (let i = 0; i < time.length; i++) {
    let waysToWin = 0;
    for (let j = 0; j < time[i]; j++) {
      let distanceTraveled = (time[i] - j) * j;
      if (distanceTraveled > distance[i]) {
        waysToWin++;
      }
    }
    res *= waysToWin;
  }
  console.log(res);
});
