var fs = require('fs');
var http = require('http');
var readStream1 = fs.createReadStream('herbert.txt','utf8');
var writeStream = fs.createWriteStream('write1.txt');
readStream1.pipe(writeStream);
var foo = function(req,res){
    var readStream = fs.createReadStream('herbert.txt','utf8');
    res.writeHead(201,{'Content-Type' : 'text/plain'});
    readStream.pipe(res);
}
http.createServer(foo).listen(3000);
console.log("Server is running on http://127.0.0.1:3000")