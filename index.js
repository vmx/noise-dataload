#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const lineReader = require('line-reader');

const noise = require('noise-search');


if (process.argv.length != 3) {
  console.log(`Usage: node index.js <path-to-json-file>`);
  process.exit(1);
}

const inputFile = process.argv[2];
console.log(`Loading ${inputFile}`);

const filename = path.parse(inputFile);
const index = noise.open(filename.name, true);

lineReader.eachLine(inputFile, async (line, last) => {
  try {
    const resp = await index.add(JSON.parse(line));
    process.stdout.write('.');
    if (last) {
      console.log('\nDone.');
      process.exit(0);
    }
  } catch(error) {
    console.error('error:', error);
  };
});
