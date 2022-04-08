

// ------- 0. import http module
let http = require('http') ;



// ------- 1. create the server :
// http.createSErver(callback functh (arrow function))
// a. create a server
// b. for each request, the callback function will get executed


let server = http.createServer( (req, res) => {
    // text request 
    // .end  to send simple response
    res.end('Hello from the server ! ');  // show in the web page
    console.log(res);
}) ;



// 2 . start the server :  ( listening to encaming requiestes)
// know the server start to  handel requeste 

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started...'); 
});




