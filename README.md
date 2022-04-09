# NodeJs
node js basics



# 1 intro :
 
1. intro :
- any browser natively understand : html , css and javaScript
- javascript exécute inside the browser , in this case the browser is the js runtime
- to avoid all the restrictions of the browser , slt : node js
-
 

Running JavaScript inside Browser



Running JavaScript Outside Browser









=> repete it marra o5ra   #1

2.   installation : 
done


# 3. running JavaScript Outside Browser
 just tktb node> w tktb l code js li t7eb 3lih …..
.exit (quitter)






all kind of global variables used by node js :


f node press 2* tab


_ : store value l rslt li 9balha :

------------------------------------------------------------------------------ l fou9  a verifier ----------------------------------------------


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




# 10. 
