var http = require("http");
var foo = function(req,res){
    res.writeHead(201,{'Content-Type' : 'text/plain'});
    res.end("Hello Node\n");
}
http.createServer(foo).listen(3000);
console.log("Server is running on http://127.0.0.1:3000")