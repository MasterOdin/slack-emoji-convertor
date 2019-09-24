const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json', (resp) => {
  // A chunk of data has been recieved.
  resp.pipe(fs.createWriteStream('emoji.json'));

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log('Done');
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
