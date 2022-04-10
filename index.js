// import section
let fs = require('fs');
let http = require('http') ;
let url = require('url');


// read file section :
let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
let pData = JSON.parse(data);

let overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, `utf-8`);
let card = fs.readFileSync(`${__dirname}/templates/template-card.html`, `utf-8`);
// ---- read product html file :
let product = fs.readFileSync(`${__dirname}/templates/template-product.html`, `utf-8`);


let replaceTemplate = function(template, data) {  
    let output = template.replace(/{IMAGE}/g, data.productImage);
     output = output.replace(/{NAME}/g, data.name);
     output = output.replace(/{PRICE}/g, data.price);
     output = output.replace(/{ROM}/g, data.ROM);
     output = output.replace(/{COLOR}/g, data.color);
     output = output.replace(/{CAMERA}/g, data.camera);
     output = output.replace(/{ID}/g, data.id);
     // ------- add this news placeholders : replace placeholder name with property json value 
     output = output.replace(/{MODEL}/g, data.modeName);
     output = output.replace(/{MODELNUMBER}/g, data.modelNumber);
     output = output.replace(/{DESCRIPTION}/g, data.Description);
     output = output.replace(/{SIZE}/g, data.size);

     return output;
}




let server = http.createServer( (req, res) => {
   // let path = req.url; 
   // ----- destruct req.url obj : 
    let {query, pathname} = url.parse(req.url, true); 


    if (pathname === '/' || pathname === '/overview'){
       let cardHtml =  pData.map( (prod) => replaceTemplate(card, prod)).join(''); 
       let output = overview.replace('{PRODUCTCARD}', cardHtml);
       res.writeHead(200, {   'content-type' : 'text/html', }) ; 
       res.end(output);

    }else if (pathname === '/products'){
        // --------- get info of product i :
        let prod = pData[query.id];

        // htmltemplate product <-- datajson prod i :
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









