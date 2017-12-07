const fs = require('fs');
const path = require('path');
const lineReader = require('line-reader');

const noise = require('noise-search');


const inputFile = process.argv[2];
console.log(`Loading ${inputFile}`);

const filename = path.parse(inputFile);


const index = noise.open(filename.name, true);

lineReader.eachLine(inputFile, (line, last) => {
  index.add(JSON.parse(line)).then(resp => {
    process.stdout.write('.');
    if (last) {
      console.log('\nDone.');
      process.exit(0);
    }
  }).catch(error => {
    console.log('error:', error);
  });
});
