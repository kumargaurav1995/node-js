var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('Clicked',function(){
    console.log('Something is Clicked');
})
eventEmitter.emit('Clicked');

var eventEmitter1 = new events.EventEmitter();
eventEmitter1.on('Hover', function(button){
    console.log(button+' is hovered');
})
eventEmitter1.emit('Hover','button 1');

var util = require('util');
var students = function(name){
    this.name = name;
}
util.inherits(students,events.EventEmitter);
var stu1 = new students('Mina');
stu1.on('scored',function(marks){
    console.log(stu1.name + ' scores '+ marks +' marks');
})
stu1.emit('scored',95);
