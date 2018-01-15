var http = require('http');
var port = 2017;

function createServer(req,res){
    console.log("server is running on port"+port);
    res.writeHead(200,{'Context-Type':"text/plain"});
    res.write("here is my text");
    res.end();
};

http.createServer(onRequest).listen(port);
