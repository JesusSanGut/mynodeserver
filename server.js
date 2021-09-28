// ----- Import libraries -----

const moment = require("moment")
const http = require("http")

// ------ Define constasts -----

const host = "localhost"
const port = 8080

// ----- Create server -----

const server = http.createServer((request, response) => {

  // Pagina principal
  if (request.url === "/") {

    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/html"
    })

    // http body
    response.write("<h1>¡Ya sé Node!</h1>")

    // send http message
    response.end()
  }

  // Página /hw
  if (request.url === "/hw") {
    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/html"
    })

    // http body
    response.write(<p style="color:orange;">Happy Halloween!</p>)

    // send http message
    response.end()
  }

  // Página /myjson
  if (request.url === "/hw") {
    // Http headers
    response.writeHead(200, {
      "Content-Type": "application/json"
    })
    const monster = { "nombre": "Espagueti", "apellido": "Volador" }
    return response.json(monster)
  }

  // Página /timenow
  if (request.url === "/timenow") {
    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/html"
    })
    // http body
    response.write(moment().format(LTS))

    // send http message
    response.end()
  }
})

// ----- Start server -----

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
