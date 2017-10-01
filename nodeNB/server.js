var http = require('http');
var fs   = require('fs');
var port = 2018;


//404 response 
function send404Request(res){
    res.writeHead(404,{'Context-Type':"text/plain"});
    res.write("Error in server");
    res.end();
};


// handle the user request
function onRequest(req,res){
    if(req.method == 'GET' && req.url == '/'){
    	res.writeHead(200,{'Context-Type':"text/html"});
    	fs.createReadStream("./public/index.html").pipe(res);   // pipe() use to like pip it out like any file 
    }
    else{
    	send404Request(res);
    }
};

http.createServer(onRequest).listen(port);
 