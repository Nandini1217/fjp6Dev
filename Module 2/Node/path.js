//"C:\Users\nandini\Desktop\FJP6 DEV\Module 2\Node\path.js"

let path= require("path");
//console.log(path);

//to get the extension of a file
let extName=path.extname("C:\Users\nandini\Desktop\FJP6 DEV\Module 2\Node\path.js");
console.log(extName);

let ex1=path.extname("C:\Users\nandini\Desktop\FJP6 DEV\Module1\index.html");
console.log(ex1);

//to get file name
let bs=path.basename("C:\Users\nandini\Desktop\FJP6 DEV\Module1\index.html");
console.log(bs);

//gives directory path
console.log(__dirname);

console.log(__filename);