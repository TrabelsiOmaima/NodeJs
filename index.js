// importing core module 
let fs = require('fs');
let http = require('http') ;
let url = require('url');

// importing user defined  module
let replaceTemplate = require('./Modules/replaceTemplate');


//importing a third party module
let slugify = require('slugify'); //last part of url (expl .../product_x )


// trajja3 a name as string connect by caracter
let slug = slugify('Apple iPhone XE', {lower: true});
console.log(slug);

let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
let pData = JSON.parse(data);


let pSlugs = pData.map(e => slugify(e.name, {lower: true}));
console.log(pSlugs);
 


// read file section :
let overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, `utf-8`);
let card = fs.readFileSync(`${__dirname}/templates/template-card.html`, `utf-8`);
let product = fs.readFileSync(`${__dirname}/templates/template-product.html`, `utf-8`);







let server = http.createServer( (req, res) => {
    let {query, pathname} = url.parse(req.url, true); 

    if (pathname === '/' || pathname === '/overview'){
       let cardHtml =  pData.map( (prod) => replaceTemplate(card, prod)).join(''); 
       let output = overview.replace('{PRODUCTCARD}', cardHtml);
       res.writeHead(200, {   'content-type' : 'text/html', }) ; 
       res.end(output);

    }else if (pathname === '/products'){
        let prod = pData[query.id];
        let output=  replaceTemplate(product, prod);
        res.writeHead(200, {   'content-type' : 'text/html', }) ; 
        res.end(output);

    }else if (pathname === '/api') {
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











