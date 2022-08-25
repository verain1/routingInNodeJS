// http://localhost:8085

const http = require('http'); 

const port = 8085;

// variable is used to 
const toDo = ["Complete node byte", "Play cricket"];

// request is used to specify the different endpoints

http
.createServer((req, res) => {
    const {method, url} = req;
    
    if (url === "/todos")
    {
        if (method === "GET"){
            res.writeHead(200, {"Content-Type": "text/html"});
            console.log("Working");
            res.write(toDo.toString());
        }

        else if(method === "POST") {
            let body = "";
            req.on('error', (err) => {
                console.error(err);
            }).on('data', (chunk) => {
                body += chunk;
            }).on('end', () => {
                body = JSON.parse(body); // The data we recieve is parsed in JSON format
                toDo.push(body.item);
                console.log(toDo);
                res.writeHead(201);
            });
        }

        else if(method == "DELETE"){
            res.writeHead(200, {"Content-Type": "text/html"})
            let body = '';
            req.on('error', (err) => {
                console.error(err);
            }).on('data', (chunk) =>{
                body += chunk;
            }).on('end', ()=>{
                body = JSON.parse(body);
                let deleteThis = body.item;
                for(let i = 0; i < toDo.length; i++){
                    if (toDo[i] === deleteThis){
                        toDo.splice(i, 1);
                        break;
                    }
                }
                res.writeHead(204);
            });
        }

        else{
            res.writeHead(501);
        }
    }

    else if (url === "/about")
    {
        if (method === "GET"){
            res.writeHead(200, {"Content-Type": "text/html"});
            console.log("GET Working");
            
        }

        else if(method === "POST") {
            let body = "";  
            res.writeHead(200, {"Content-Type": "text/html"});
            console.log("POST Working");

        }

    }
    

    res.end();
})
.listen(port, ()=>{ //Only works when server runs successfully
    console.log(`Nodejs server started on port: ${port}`);
});


