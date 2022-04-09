// import section
let fs = require('fs');
let http = require('http') ;
let url = require('url');


// read file (once) section :
let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
let pData = JSON.parse(data);

let overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, `utf-8`);
let card = fs.readFileSync(`${__dirname}/templates/template-card.html`, `utf-8`);


// fnct replace each html variable {NAME} with it correspendent in json file data.name
let replaceTemplate = function(template, data) {  
    // (html_template,  json_data)
    // let output = template.replace({IMAGE}, data.productImage);
     // just replace 1st occurence of IMAGE => slt : regix / /g: g global
    let output = template.replace(/{IMAGE}/g, data.productImage);
     output = output.replace(/{NAME}/g, data.name);
     output = output.replace(/{PRICE/g, data.price);
     output = output.replace(/{ROM}/g, data.ROM);
     output = output.replace(/{COLOR}/g, data.color);
     output = output.replace(/{CAMERA}/g, data.camera);
     output = output.replace(/{ID}/g, data.id);
     return output;

}





let server = http.createServer( (req, res) => {
    let path = req.url; 
    
    if (path === '/' || path === '/overview'){
        // loop data.json (array of objects) : + replace template'card' with json values 'prod'
       let cardHtml =  pData.map( (prod) => replaceTemplate(card, prod)).join(''); //map return array of string objects , 'output' ,  .join(') : concatinate all  the array obj en seul string

       // replace  {PRODUCTCARD}  with cardHtml and send it as a res :
       let output = overview.replace('{PRODUCTCARD}', cardHtml);
       res.writeHead(200, {   'content-type' : 'text/html', }) ; 
       res.end(output);



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









