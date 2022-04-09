let fs = require('fs');

let card = fs.readFileSync(`${__dirname}/templates/template-card.html`, `utf-8`);

let output = card.replace(/{NAME}/g, 'iphone');

console.log(output);