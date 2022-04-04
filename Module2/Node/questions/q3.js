//Q. copy index.html file from module1 to a folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let srcPath=path.join(__dirname,"..","..","..","Module1","index.html");


let desPath=path.join(__dirname,"..","..","index.html");

fs.copyFileSync(srcPath,desPath);