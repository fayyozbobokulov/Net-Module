const { read } = require('fs/promises');
const path = require('path');
const readline = require('readline')
const rl = readline.createInterface({
    
});

readline.question('Enter path name: \n', name => {
    console.log(name);
    readline.close();
});

console.log(fn);


