
let fs = require('fs');
let http = require('http') ;
let url = require('url');



let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
let pData = JSON.parse(data);





let server = http.createServer( (req, res) => {
    let path = req.url; 
    if (path === '/' || path === '/overview'){
        res.end('this is overwiew page');   
    }else if (path === '/products'){
        res.end('this is products page');

    }else if (path === '/api') {
        res.writeHead(200, {  'content-type' : 'application/json' }) ; 
            res.end(data);
    }else {  
        res.writeHead(404, {  
            'content-type' : 'text/html',
            'my-header' : 'Hey-there'
        }) ; 
        res.end('<h1>page not found ! </h1>');  
    }
}) ;





server.listen(8000, '127.0.0.1', () => {
    console.log('server has started...'); 
});









