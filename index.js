

// import section
let fs = require('fs');
let http = require('http') ;
let url = require('url');

// read json data once (sync) + convert json to js object also once :
let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
let pData = JSON.parse(data);




// ------- 1. create the server : for each request, the callback function will get executed
let server = http.createServer( (req, res) => {
    let path = req.url; 
    if (path === '/' || path === '/overview'){
        res.end('this is overwiew page');   
    }else if (path === '/products'){
        res.end('this is products page');

    }else if (path === '/api') {
        /*
        // read json file async  : ,   "./"   : represent current folder, not pro , we change it with :  __dirname 
        fs.readFile(`${__dirname}/dev-data/data.json`, `utf-8`, (err, data) => {
            //convert JSON string to js object :
            let pData = JSON.parse(data);
            //set content type to json before send response :
            res.writeHead(200, {  'content-type' : 'application/json' }) ; 
            // sending response :
            res.end(data);
        });
        */

        res.writeHead(200, {  'content-type' : 'application/json' }) ; 
            res.end(data);

    }
    else {  
        res.writeHead(404, {  
            'content-type' : 'text/html',
            'my-header' : 'Hey-there'
        }) ; 
        res.end('<h1>page not found ! </h1>');  
    }
}) ;




// 2 . start the server :  know the server start to  handel requeste 
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started...'); 
});









