require('dotenv').config();
const watch = require('node-watch');
const fetch = require('node-fetch');
const fs = require('fs');



const syncOutDir = process.env.SYNC_IN_DIR;

console.log(syncOutDir);

watch(syncOutDir, {recursive: false}, (evt, name) => {
  console.log(`changed. ${name}`);
  
  
  const stats = fs.statSync(name)
  const fileSizeInBytes = stats.size;
  const readStream = fs.createReadStream(name);

  console.log(`stats: ${JSON.stringify(stats)}`);
  fetch("http://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-length": fileSizeInBytes
    },
    body: readStream,
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
});
