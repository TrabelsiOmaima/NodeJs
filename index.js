

// import section
let http = require('http') ;
let url = require('url');



// ------- 1. create the server : for each request, the callback function will get executed
let server = http.createServer( (req, res) => {
    //console.log(req.url);   // value elli ba3ed l port /...
    // handle routes : 
    let path = req.url; // get url typed by user
    if (path === '/' || path === '/overview'){
        res.end('this is overwiew page');   //status code = 200 == everythink is okey 
    }else if (path === '/products'){
        res.end('this is products page');
    }else {  //fallback route
        res.writeHead(404, {  
            'content-type' : 'text/html',
            'my-header' : 'Hey-there'
        }) ; // = 404 status code , inspecter : console + network : objet created{}
        res.end('<h1>page not found ! </h1>');  // afficher web page
    }
}) ;




// 2 . start the server :  know the server start to  handel requeste 
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started...'); 
});









