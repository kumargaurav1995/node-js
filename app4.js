var  fs = require('fs');
var read_string = fs.readFileSync('test.txt','utf8');
console.log(read_string);
fs.writeFileSync('test2.txt',read_string);

var fs1 = require('fs');
var read_string1 = fs1.readFile('test.txt','utf8',function(err,data){
    if(err)
    return console.error(err);

    console.log(data);
});
console.log('the file is read');
fs.writeFile('test3.txt',read_string1,function(err,data){
    if(err)
    return console.error(err);

    console.log('Success');
});
fs.unlink('test3.txt');