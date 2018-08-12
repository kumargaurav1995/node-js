var fs = require('fs');
fs.mkdirSync('node');
fs.rmdirSync('node');

var read_string = fs.readFileSync('test.txt','utf8');
fs.mkdir('node1',function(){
    fs.writeFile('./node1/my.txt',read_string,function(err,data){
        if(err)
        return console.error(err);
    
        console.log('Success');
}
)
}
);
fs.unlink('./node1/my.txt',function(){
    fs.rmdir('node1');
});