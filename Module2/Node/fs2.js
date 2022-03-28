let fs=require("fs");
let path=require("path");

// //create a directory
// //if it doest exist
// if(!fs.existsSync("hamariDirectory")){
//   fs.mkdirSync("hamariDirectory");
// }

// //read a directory
// //replaced single slash with double
// let folderPath="C:\\Users\\nandini\\Desktop\\FJP6DEV\\Module1";
// let contentFolder= fs.readdirSync(folderPath);
// console.log(contentFolder);

// //delete a directory
// fs.rmdirSync("hamariDirectory");

//copy a file
let sourcePath=path.join(__dirname,"file.txt");
let destinationPath=path.join(__dirname,"modularity","file.txt");
fs.copyFileSync(sourcePath,destinationPath);