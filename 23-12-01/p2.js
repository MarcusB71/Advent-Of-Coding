const fs = require('fs');

const inputFile = 'data.txt';
const outputFile = 'output.txt';

const regex = /[1-9]/g;

const calcCalibrationVals = (lines) => {
  let res = 0;
  lines.forEach((line) => {
    const matches = line.match(regex);
    const firstChar = matches[0];
    const lastChar = matches[matches.length - 1];
    const fullNum = parseInt(firstChar + lastChar);
    res += fullNum;
  });
  return res;
};

const stringReplace = (lines) => {
  return lines.map((line) => {
    return line
      .replaceAll(/(one)/g, '1')
      .replaceAll(/(two)/g, '2')
      .replaceAll(/(three)/g, '3')
      .replaceAll(/(four)/g, '4')
      .replaceAll(/(five)/g, '5')
      .replaceAll(/(six)/g, '6')
      .replaceAll(/(seven)/g, '7')
      .replaceAll(/(eight)/g, '8')
      .replaceAll(/(nine)/g, '9');
  });
};

fs.readFile(__dirname + '\\' + inputFile, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // p1
  // const lines = data.split('\n');
  // calcCalibrationVals(lines);

  const lines = data.toLowerCase().split('\n');
  const replacedData = stringReplace(lines);

  const finalResult = calcCalibrationVals(replacedData);
  console.log(finalResult);

  replacedData.forEach((line) => {
    fs.writeFileSync(__dirname + '\\' + outputFile, line + '\n', { flag: 'a' });
  });
});
