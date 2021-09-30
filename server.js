// ----- Import libraries -----

const moment = require("moment")
const http = require("http")
const fs = require("fs")

// ------ Define constasts -----

const host = "localhost"
const port = 8080

// ----- Create server -----

const server = http.createServer((request, response) => {

  // Pagina principal
  if (request.url === "/") {
    fs.appendFile("requests.log", `\n ${moment().format("LTS")} : /`, (err) => {
      if (err) {
        console.log(err)}
    })

    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/html"
    })

    // http body
    response.write("<h1> &iexcl;Ya s&eacute Node! </h1>")

    // send http message
    response.end()
  }

  // Página /hw
  else if (request.url === "/hw") {
    fs.appendFile("requests.log", `\n ${moment().format("LTS")} : /hw`, (err) => {
      if (err) {
        console.log(err)}
    })
    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/html"
    })

    // http body
    response.write('<p style="color:orange;">Happy Halloween!</p>')

    // send http message
    response.end()
  }

  // Página /myjson
  else if (request.url === "/myjson") {
    fs.appendFile("requests.log", `\n ${moment().format("LTS")} : /myjson`, (err) => {
      if (err) {
        console.log(err)}
    })
    // Http headers
    response.writeHead(200, {
      "Content-Type": "application/json"
    })
    const monster = { "nombre": "Espagueti", "apellido": "Volador" }
    response.write(JSON.stringify(monster))
    response.end()
  }

  // Página /timenow
  else if (request.url === "/timenow") {
    fs.appendFile("requests.log", `\n ${moment().format("LTS")} : /timenow`, (err) => {
      if (err) {
        console.log(err)}
    })
    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/plain"
    })
    // http body
    response.write(moment().format("LTS"))

    // send http message
    response.end()
  }

  else if (request.url === "/web") {
    fs.appendFile("requests.log", `\n ${moment().format("LTS")} : /web`, (err) => {
      if (err) {
        console.log(err)}
    })
    fs.readFile("front/index.html", (error, data) => {
      response.writeHead(200, { "Content-Type": "text/html" })
      response.write(data)
      response.end()
    })
  }
  else if (request.url === "/dinosaurio") {
    fs.readFile("front/dinosaurio.jpg", (error, data) => {
      response.writeHead(200, { "Content-Type": "image/jpeg" })
      response.write(data)
      response.end()
    })
  }

  // El resto
  else {
    fs.appendFile("requests.log", `\n ${moment().format("LTS")} : /404`, (err) => {
      if (err) {
        console.log(err)}
    })
    // Http headers
    response.writeHead(404, {
      "Content-Type": "text/plain"
    })
    // http body
    response.write("Estos no son los androides que buscas.")

    // send http message
    response.end()
  }

})

// ----- Start server -----

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
