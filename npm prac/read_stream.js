const { createReadStream } = require('fs')

// highWaterMark is the buffer size
const stream = createReadStream('./text1.txt', { highWaterMark: 1000, encoding: 'utf8' })

stream.on('data', (result) => {
  console.log(result);
})

stream.on('error', error => {
  console.log(error);
})