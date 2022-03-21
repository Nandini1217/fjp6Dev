let fs=require("fs");
//console.log(fs);

let path = require("path");
let filepath=path.join(__dirname,"file.txt");

//create
fs.writeFileSync(filepath,"again i m writing in text file");
//changed the content of text file

//read
let content=fs.readFileSync(filepath,'utf-8');
console.log(content);

//update
fs.appendFileSync(filepath," newly added content");
console.log(fs.readFileSync(filepath,'utf-8'));

//to add in new line
fs.appendFileSync(filepath,"\nnewly added content");
console.log(fs.readFileSync(filepath,'utf-8'));

//delete
fs.unlinkSync(filepath);
