
//let replaceTemplate = function(template, data) {  
module.exports = function(template, data) {  
    
    let output = template.replace(/{IMAGE}/g, data.productImage);
     output = output.replace(/{NAME}/g, data.name);
     output = output.replace(/{PRICE}/g, data.price);
     output = output.replace(/{ROM}/g, data.ROM);
     output = output.replace(/{COLOR}/g, data.color);
     output = output.replace(/{CAMERA}/g, data.camera);
     output = output.replace(/{ID}/g, data.id);
     output = output.replace(/{MODEL}/g, data.modeName);
     output = output.replace(/{MODELNUMBER}/g, data.modelNumber);
     output = output.replace(/{DESCRIPTION}/g, data.Description);
     output = output.replace(/{SIZE}/g, data.size);

     return output;
}

