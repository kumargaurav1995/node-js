setTimeout (function(){
    console.log('3 sec have passed');
},3000);
console.log(__dirname);
console.log(__filename);
var time = 0;
var timer = setInterval(function(){
time+=2;
console.log(time+'sec have passed');
if(time>7){
    clearInterval(timer);
}
},2001);
var hello = require('./hello.js');
console.log(hello.sayHelloInHindi());
console.log(hello.sayHelloInSpanish());