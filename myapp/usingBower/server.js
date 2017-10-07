var express = require("express");
var app = express();
var path = require('path');

var port = 2017;

app.set('views', path.resolve(__dirname,'client','views'));

app.get('/',function(req,res){
    res.render('index.ejs');
});

app.listen(port,function(){
    console.log('server is running on port' + port);
});

