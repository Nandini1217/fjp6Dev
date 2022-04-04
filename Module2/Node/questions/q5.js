//move a file

let fs = require("fs");
let path = require("path");

let srcPath=path.join(__dirname,"file2.txt");

let destPath=path.join(__dirname,"NewFolder","file1.txt");

fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);