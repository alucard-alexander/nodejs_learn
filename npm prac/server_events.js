const http = require('http')
const server = http.createServer()

server.on('request', (req, res)=> {
  if (req.url == '/') {
    res.end('hone')
  }else if (req.url == '/about'){
    res.end('about page')
  }else{
    res.end('page not found')
  }
})

server.listen(8080)
