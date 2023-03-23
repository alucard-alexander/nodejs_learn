const _ = require('http')
const server = _.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Home page')
  }else if(req.url == '/about'){
    res.end('Abount')
  }else{
    res.end('404 page not found')
  }
})

server.listen(8080)