const http = require('http')
const port = 4000;
const fs = require('fs')


const server = http.createServer((req, res) => {
  // console.log("url method", req.url)
  // console.log("url method", req.method)
  // console.log("a requet has been mad")
  res.setHeader("Content-Type", "text/html")
  let route = "./views/"

  switch (req.url) {
    case "/":
      route += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      route += "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-us":
      res.statusCode = 301;
      res.setHeader('Location', "/contact")
      res.end()
      break;
    default:
      route += "404.html";
      break;
      res.statusCode = 404
  }
  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(port, () => {
  console.log(`the port is listening to ${port}`)
})