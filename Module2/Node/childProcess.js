let cp= require('child_process');
console.log(cp);

//opening calculator
cp.execFileSync("calc");

//opening vs code
cp.execSync("code");

//opening a file
let content= cp.execSync("node test.js");
console.log("output "+content);

