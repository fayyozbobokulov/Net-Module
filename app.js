const path = require('path');
const readline = require('readline');
const fs = require('fs');
const prompt = require('prompt-sync')({signint: true});
const jm = require('js-meter');

const fn = prompt('Enter file path name:');
console.log(fn);
const test = require(`./${fn}`);

// const rl = readline.createInterface({
//     input: fs.createReadStream(fn)
// });
const isPrint = true
const isKb = true

if(path.extname(fn) === '.js'){
    for(let n = 0; n<test.length; n++){
        console.log(test[n].title)
        const m = new jm({isPrint, isKb })
        test[n].func();
        const meter = m.stop();
    };
} else {
    console.log('Oops there is no JS file :( ');
}


