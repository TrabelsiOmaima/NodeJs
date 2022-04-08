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

        1. Creating a server :
                let server = http.createServer( (req, res) => {
                    res.end('Hello from the server ! ');  /
                    console.log(res);
                }) ;

        2. Listening to requests :
            server.listen(8000, '127.0.0.1', () => {
                console.log('server has started...'); 
            });





