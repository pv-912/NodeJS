// without using connect module

// var http = require('http');
// var fs   = require('fs');
// var port = 2018;


// //404 response 
// function send404Request(res){
//     res.writeHead(404,{'Context-Type':"text/plain"});
//     res.write("Error in server");
//     res.end();
// };


// // handle the user request
// function onRequest(req,res){
//     if(req.method == 'GET' && req.url == '/'){
//     	res.writeHead(200,{'Context-Type':"text/html"});
//     	fs.createReadStream("./public/index.html").pipe(res);   // pipe() use to like pip it out like any file 
//     }
//     else{
//     	send404Request(res);
//     }
// };

// http.createServer(onRequest).listen(port);
 



// with using connect module
 var connect = require('connect');
 var http    = require('http');

 var app     = connect();
 var port    = 2020;

 // // uses of next

 // function frame(res,req,next){
 // 	console.log('request by frame');
 // 	next();
 // }

 // function frame2(res,req,next){
 // 	console.log('request by frame22');  //next is use to tell the function that it should run once more a their is one more function ahead to it... if u dont use next()  th funstion will stop at that point 
 // }

 // app.use('/frame',frame);
 // app.use('/frame2',frame2);



 function frame(res,req){
 	console.log('request by frame');
 }

 function frame2(res,req){
 	console.log('request by frame22');
 }

 app.use('/frame',frame);
 app.use('/frame2',frame2);

 http.createServer(app).listen(port);

 console.log('server is running on the port ' + port);