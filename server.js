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
    response.write("<h1> ¡Ya se Node! </h1>")

    // send http message
    response.end()
  }

  // Página /hw
  else if (request.url === "/hw") {
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
    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/javascript"
    })
    const monster = { "nombre": "Espagueti", "apellido": "Volador" }
    response.write(monster)
    response.end()

  }

  // Página /timenow
  else if (request.url === "/timenow") {
    // Http headers
    response.writeHead(200, {
      "Content-Type": "text/plain"
    })
    // http body
    response.write(moment().format())

    // send http message
    response.end()
  }

  // El resto
  //else
})

// ----- Start server -----

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
