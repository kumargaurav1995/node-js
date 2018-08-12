var fs = require('fs');
var readStream = fs.createReadStream('herbert.txt');
readStream.setEncoding('utf8');
var writestream = fs.createWriteStream('write.txt');
readStream.on('data',function(chunk){
    console.log('-------------------------------------------------');
    console.log(chunk);
    writestream.write(chunk);
})
readStream.on('end',function(chunk){
    console.log('-----------------End----------------------------');
})