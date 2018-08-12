var express = require('express');
var app = express();
app.set('view engine','ejs');
app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
})
app.get('/about', function(req,res){
    res.send('this is about page');
})
//app.get('/students/:name', function(req,res){
  //  res.send('You have requested to see the student id  '+req.params.name);
//})
var students = {
    1 : 'Mark',
    2 : 'Tom',
    3 : 'Jhon'
}
app.get('/students/:id', function(req,res){
    res.render('students',{name :students[req.params.id], id : req.params.id});
   res.send('The name of this student is :' +students[req.params.id]);
})
var details = {
    1 : {
        name : 'Mark',
        subjects : ['c++','Mysql','Javascript']
    }
}
app.get('/details/:id',function(req,res){
    res.render('details',{name : details[req.params.id].name , id :req.params.id , subjects : details[req.params.id].subjects});
})

app.listen(3000, function(){
    console.log('our server is live on port 3000');
})