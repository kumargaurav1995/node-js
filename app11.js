var fs = require('fs');
var http = require('http');
var foo = function (req, res) {
    console.log('requested url : '+ req.url);
    if(req.url ==='/home' || req.url ==='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('index.html').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type' : 'application/json'})
    var jsonObj = {
        name: 'Puneet',
        surname: 'Kumar',
        age: 26
    };
    res.end(JSON.stringify(jsonObj));
}
else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream('404.html').pipe(res);
}
}
http.createServer(foo).listen(3000);
console.log("Server is running on http://127.0.0.1:3000")