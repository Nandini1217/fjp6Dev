// how to take input
// let input=process.argv[2];
// console.log(input);

let fs=require("fs");

let folderPath=process.argv[2];
//console.log(folderPath);

let foldExists=fs.existsSync(folderPath)

if(foldExists){
    //read folder
console.log("path is valid");
}else{
    console.log("please enter a valid path")
}