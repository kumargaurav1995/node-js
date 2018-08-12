var fs = require('fs');
var http = require('http');
var foo = function (req, res) {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    var jsonObj = {
        name: 'Puneet',
        surname: 'Kumar',
        age: 26
    };
    res.end(JSON.stringify(jsonObj));
}
http.createServer(foo).listen(3000);
console.log("Server is running on http://127.0.0.1:3000")