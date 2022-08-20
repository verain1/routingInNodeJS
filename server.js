// http://localhost:8085

const http = require('http'); 

const port = 8085;


http
.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'}); //200 is a successful request code
    response.write("<h1>Hello, this is from the server</h1>");
    response.end() // Closing the response
})
.listen(port, ()=>{ //Only works when server runs successfully
    console.log(`Nodejs server started on port: ${port}`); 
});




