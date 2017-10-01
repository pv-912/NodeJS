var http = require('http');
var port = 2018;

function onRequest(req,res){
    res.writeHead(200,{'Context-Type':"text/plain"});
    res.write("here is my text");
    console.log("server is running on port"+port);    
    res.end();
};

http.createServer(onRequest).listen(port);
console.log("server is running on port"+port);  
