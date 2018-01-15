var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));



app.get('/',function(req, res){
	res.render('index');
});

app.post('/profile', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('profile', {data : req.body});
});

app.get('/contact/:id',function(req, res){
	var data = {
		age:20,name:'prashant',
		hobbies : ['cricket','chess','badminton']
	};

	res.render('contact',{person: req.params.id, data:data});
});


app.listen(3000);


// app.get('/',function(req, res){
// 	res.send('hello');
// });

// app.get('/contact/:id',function(req, res){
// 	res.send('hello' + req.params.id);
// });

// app.get('/hello',function(req, res){
// 	res.sendFile(__dirname + '/hello.html');
// });


// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
// 	console.log('server started');

// 	if(req.url === '/contact'){
// 		res.writeHead(200, {'Content-type' : 'text/html'});
// 		fs.createReadStream(__dirname + '/contact.html').pipe(res);
// 	}
// 	res.end('hello');
// });

// server.listen(3000,'127.0.0.1');