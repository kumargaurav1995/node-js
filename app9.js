var fs = require('fs');
var http = require('http');
var foo = function(req,res){
    var readStream = fs.createReadStream('index.html','utf8');
    res.writeHead(201,{'Content-Type' : 'text/html'});
    readStream.pipe(res);
}
http.createServer(foo).listen(3000);
console.log("Server is running on http://127.0.0.1:3000")