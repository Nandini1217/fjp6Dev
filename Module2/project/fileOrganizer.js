// how to take input
// let input=process.argv[2];
// console.log(input);

let fs=require("fs");
let path=require("path");

let folderPath=process.argv[2];
//console.log(folderPath);

let foldExists=fs.existsSync(folderPath)

let extensions={
    Audio:[".mp3"],
    Video:[".mp4",".gif"],
    Document:[".doc",".pdf",".xlsx",".txt"],
    Image:[",jpeg",".jpg",".png"],
    Software:[".exe"]
}

if(foldExists){
    //read folder
//console.log("path is valid");
let files=fs.readdirSync(folderPath);
for(let i=0;i<files.length;i++){
    let ext=path.extname(files[i]);

   // console.log(ext);
}

//console.log(files);
}else{
    console.log("please enter a valid path")
}