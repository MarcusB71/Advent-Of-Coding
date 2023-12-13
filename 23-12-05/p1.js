const fs = require('fs');
const inputFile = 'data.txt';

const findConvertedNum = (prevValue, lines) => {
  let res = 0;
  lines.forEach((line) => {
    const newLine = line.split(' ').map((x) => parseInt(x));
    if (prevValue > newLine[1] && prevValue < newLine[1] + newLine[2]) {
      res = prevValue - newLine[1] + newLine[0];
    }
  });
  if (res != 0) {
    return res;
  } else {
    res = prevValue;
  }
  return res;
};

fs.readFile(__dirname + '\\' + inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  regex =
    /(seeds:|seed-to-soil map:|soil-to-fertilizer map:|fertilizer-to-water map:|water-to-light map:|light-to-temperature map:|temperature-to-humidity map:|humidity-to-location map:)/g;
  let [
    temp,
    seeds,
    seedToSoil,
    soilToFert,
    fertToWater,
    waterToLight,
    lightToTemp,
    tempToHumid,
    humidToloc,
  ] = data
    .replace(regex, '|')
    .split('|')
    .map((x) => x.trim().split('\n'));
  seeds = seeds[0].split(' ').map((x) => parseInt(x));
  let result = 999999999999999;

  seeds.forEach((seed) => {
    let seedResult = findConvertedNum(
      findConvertedNum(
        findConvertedNum(
          findConvertedNum(
            findConvertedNum(
              findConvertedNum(
                findConvertedNum(
                  findConvertedNum(seed, seedToSoil),
                  seedToSoil
                ),
                soilToFert
              ),
              fertToWater
            ),
            waterToLight
          ),
          lightToTemp
        ),
        tempToHumid
      ),
      humidToloc
    );
    if (seedResult < result) {
      result = seedResult;
    }
  });
  console.log('result: ');
  console.log(result);
});
