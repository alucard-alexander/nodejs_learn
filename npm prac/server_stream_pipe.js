const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  // const text = readFileSync('./text1.txt', 'utf8')
  // res.end(text)
  const fileStream = fs.createReadStream('./text1.txt', { highWaterMark: 90000, encoding: 'utf8'})
  fileStream.on('open', ()=>{
    fileStream.pipe(res)
  })

  fileStream.on('error', err=>{
    res.end(err);
  })
})

server.listen(8080)