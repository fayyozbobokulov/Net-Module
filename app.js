const path = require('path');
const readline = require('readline');
const fs = require('fs');
const prompt = require('prompt-sync')();
const rl = readline.createInterface({
    input: fs.createReadStream(fn)
});

const fn = prompt('Enter file path name: \n');
console.log(fn);


rl.on('line', line => {
    console.log('done');
});


console.log(fn);


