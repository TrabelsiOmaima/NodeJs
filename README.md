#  NodeJS
basics of node JS 



# 1 intro :

- any browser natively understand : HTML , CSS and JavaScript
- JavaScript executed inside the browser , in this case the browser is the JS runtime
- to avoid all the restrictions of the browser , Solution is  : node js
- Running JavaScript inside Browser / Running JavaScript Outside Browser


# 2.   installation : 
    done


# 3. Running JavaScript Outside Browser
    just tktb node> w tktb l code js li t7eb 3lih …..
    .exit (quitter)

    all kind of global variables used by node js :

    f node press 2* tab

    _ : store value l rslt li 9balha :





# 4. Reading and Writing Files Synchronously :

    - PS : to check the documentation of any module : very helpful
      https://nodejs.org/dist/latest-v16.x/docs/api/

    - means of A program synchronize and synchronize ???????????????????

    - import fs module (file system) : 
        let fs = require('fs');


    - reading file synchronously :
        let textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
        console.log(textIn);


    - writting file synchronously :
        fs.writeFileSync('./txt/output.txt', `line 1 : ${textIn} \nLine 2 : ${Date.now}`);





# 5. Asynchronous nature of NODE JS :  a reregarder plustard  why we need Asynchronous ?

    - Synchronous , Asynchronous , blocking, unblocking code ?
    - nodejs is single thread
    - Synchronous = read and exécute code line by line => block other line (waiting), blocking code
    - slt : Asynchronous 
    - there are many mecanism of Asynchronous  , like call back function ...etc
    - Asynchronous , means : each traitement en cours d'exécution but not yet finishied => run in the backgroung 
    - when this code rslt is ready, returnt (call back) to the principal progrm
    - other prblm : case imbraking traitement !


# 6. Reading & Writing Files Asynchronously :
        fs.readFile('./txt/start.txt', 'utf-8' , (err, data1) => {
            console.log(data1) ;
            fs.readFile(`./txt/${data1}.txt`, 'utf-8' , (err, data2) => {
                console.log(data2);
                fs.readFile(`./txt/append.txt`, 'utf-8' , (err, data3) => {
                    console.log(data3);


                    fs.writeFile('./txt/final.txt', `${data2} \n\n ${data3}`, function(){
                        console.log('file is written !');
                    })

                })
            })

        });  


    

# 7. Creating a Simple Web Server :

-   learn how to create a simple web server using NODE JS. In order to create a web server, there are two steps involved:
        0. import http module :
            let http = require('http') ;

        1. Creating a server :  for each request, the callback function will get executed
                let server = http.createServer( (req, res) => {
                    res.end('Hello from the server ! ');  /
                    console.log(res);
                }) ;

        2. Listening to requests : know the server start to  handel requeste
            server.listen(8000, '127.0.0.1', () => {
                console.log('server has started...'); 
            });


        http://127.0.0.1:8000/  



# 8. Routing in NODE JS :
    - URL example : http://127.0.0.1:8000/product
    - in the old time, we specified the : file name (mapping)
        http://127.0.0.1:8000/product   : product is a physical file name  
    -  with node js we specified the : route name : (routing)
        http://127.0.0.1:8000/product  : product here is a root name


    - Routing =  ( # actions for # urls)  : (we use EXPRESS tool, but not now)

            let url = require('url'); 
            let server = http.createServer( (req, res) => {
                let path = req.url; 
                if (path === '/' || path === '/overview'){
                    res.end('this is overwiew page'); 
                }else if (path === '/products'){
                    res.end('this is products page');
                }else {  
                    res.writeHead(404, {  
                        'content-type' : 'text/html',
                        'my-header' : 'Hey-there'
                    }) ;
                    res.end('<h1>page not found ! </h1>');  
                }
            }) ;




# 9. Creating a simple Web API :

    - API is a service from  which, we can request some date
    - JSON : file format tab of (objects,)

    - here , we will create url '/api' ,  when user "REQUEST" this url we send him a json data (format string data pas format javascript object) :

    - placeholder (html file) : {CARDNAME}, {PRICE}
    - 1st version :  read json file async 
                + url  /api :
                    }else if (path === '/api') {
                + read json file async  : ,   "./"   : represent current folder, not pro , we change it with :  __dirname 
                        fs.readFile(`${__dirname}/dev-data/data.json`, `utf-8`, (err, data) => {
                + convert JSON string to js object :
                        let pData = JSON.parse(data);
                + set content type to json before send response :
                        res.writeHead(200, {  'content-type' : 'application/json' }) ; 
                + sending response :
                    res.end(data);
                });


    => the read of data.json Asnc and the convert of it to JavaScript object,  for each time a client access to /api url => affect la performance of site => slt read and convert the data.json once ( sync) :
    
        + read JSON data once (sync) + convert JSON to JavaScript object also once :
            let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
            let pData = JSON.parse(data);

        +   }else if (path === '/api') {
                res.writeHead(200, {  'content-type' : 'application/json' }) ; 
                res.end(data);

            }




# 10.  Creating template & send HTML Response :

        - here we are going to create an HTML template, and we are going to send the HTML content to as a response to the client. 
        - We are going to display the products from the JSON file in the webpage in a formatted and styled way.
        - html placeholder = {PRODUCTCARD} {NAME}

        -  get values from JSON file, and put it in HTML form, then send it to client format response when he loads /overview URL :



- Code steps


    +   templates> template-overview.html> 
            <body>
                <div class="container">
                <h1>iPhone Store</h1>

                <div class="products-container">
                    {PRODUCTCARD}  // remplace template-card.html
                </div>
                </div>
            </body>



    +   templates> template-card.html> 

        from : 
            <img src="https://www.google.com/imgres?M&vet=12ahUKEwipqcKcyof3AhUBi_0f3A" class="product_image">
            <div class="product_price"><b>Price:</b> 720 $</div>
            <a class="product_link" href="#">
                <span>Product Detail</span>
            </a>
        to : 
            <img src="{IMAGE}" class="product_image">
            <div class="product_price"><b>Price:</b> {PRICE} $</div>
            <a class="product_link" href="products?id={ID}">
                <span>Product Detail</span>
            </a>




    + index.js>
        - read templates file :
            let overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, `utf-8`);
            let card = fs.readFileSync(`${__dirname}/templates/template-card.html`, `utf-8`);

        - fnct (html_template,  json_data) replace each html variable {NAME} with it correspendent in json file data.name : 

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
   


                if (path === '/' || path === '/overview'){
                        // loop data.json (array of objects) : + replace template'card' with json values 'prod'
                    let cardHtml =  pData.map( (prod) => replaceTemplate(card, prod)).join(''); //map return array of string objects , 'output' ,  .join(') : concatinate all  the array obj en seul string
                    console.log(cardHtml);



                - replace  {PRODUCTCARD}  with cardHtml and send it as a res :
                        let output = overview.replace('{PRODUCTCARD}', cardHtml);
                        res.writeHead(200, {   'content-type' : 'text/html', }) ; 
                        res.end(output);




# 11. Parsing URL & handling Query Strings : /products?id

  - Query Strings = ?id=i
    let {query, pathname} = url.parse(req.url, true); 
    query : obj fih all values passed in url //query: [Object: null prototype] { id: '0' },

  - pathname eq URL // '/products',



  + Code steps :

        - template-product.html : create placeholder {PLACEHOLDER} selon need ...
        - index.js : read product html file ...   
        - replace placeholder name with property json value (the new ones)...
        - get the query part of the url... by destructing req.url obj :
            let {query, pathname} = url.parse(req.url, true); 
        
                
    }else if (pathname === '/products'){
    - get info of product i :
        let prod = pData[query.id];

    - htmltemplate product <-- datajson prod i and send res :
        let output=  replaceTemplate(product, prod);
        res.writeHead(200, {   'content-type' : 'text/html', }) ; 
        res.end(output);





# 12. Creating a Custom Module :
            - a module just another script(.js) file , from there we can export some values,
            and those exports values can be used in other script files , by importing it 
            - PS : each script file in NodeJS is a module : example : index.js


            - there, we will learn : create a module, export it, import it, and use it :


            + Code steps :

            create a module  :
            Module>replaceTemplate.js (cut..paste replaceTEmplate() from index.js)

            - export a module : 
            from : 
                let replaceTemplate = function(template, data) {  
            to :
                module.exports = function(template, data) {  

            - import a module : index.js
                let replaceTemplate = require('./Modules/replaceTemplate');

            - use module :
                let cardHtml =  pData.map( (prod) => replaceTemplate(card, prod)).join(''); 


            - template-product : back button : 
                    <a href="/overview" class="product_back">



# 13. NPM :
        - node package manager
        - npm is a command line interface applications include  with node js
        - use to install and manage open source package 
        - istalled auto with node js 
        - https://www.npmjs.com/ : the repository ( stored all packages(modules) )
        -  npm is a software that basicly use to manage the code part open source package include and used in yr project.

        - code :
        npm init // create package.json  (projet configuration file )




# 14. Package types and installs :
    - install package in the project using npm


    - 2 types package can install from npm :
            + simple/regular dependencies (code to include in our project)

                    npm install slugify :
                    "dependencies": {
                        "slugify": "^1.6.5"
                    }

            + development dependency ( tools for developpemnt, dont need in the code )
                npm i nodemon  //auto restart node app (case of  change code ) 

    - 2 type install : 
            + install locally  un iquement this project :
            "scripts": {
                "start": "nodemon index.js"
            },

            npm run start //start server

            + install globaly, all project  : 
            npm install nodemon -g // sudo npm install -g nodemon
            nodemon index.js // start server 


    + node_module folder : all depen,de,ncy project 






# 15. Using Third Party Module :
    - importing core module  (node)
            let fs = require('fs');


    - importing user defined  module (user)
            let replaceTemplate = require('./Modules/replaceTemplate');


    - importing a third party module (npm)
            let slugify = require('slugify');
            ( json file
            "dependencies": {
                "slugify": "^1.6.5")

        + slugify = last part of url (expl .../apple-iphone-12)
        + input  "Apple iPhone XE" =>  output selon notre config : "apple-iphone-xe"






