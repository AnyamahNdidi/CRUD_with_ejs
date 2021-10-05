const http = require("http")
const port = 6000

const server = http.createServer((req, res) => {
  console.log("server is been created")
})

server.listen(port, () => {
  console.log(`port set`)
})