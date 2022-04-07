// import fs module (file system)
let fs = require('fs');



// # 4.ynchronous  read and write  -----------------------------

let textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

fs.writeFileSync('./txt/output.txt', `line 1 : ${textIn} \nLine 2 : ${Date.now}`);


// # 6. Asynchronous read and write ---------------------------------

// readFile(file, codeFile, callbackFunction(error, variableToSaveDataFile))
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


});  // exécute 2nd en background : Asynchronous 


console.log('file is reading..'); // exécute 1st by node, cuz it more fast

