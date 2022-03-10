//empty array
let arr=[];
console.log(arr);

//array with elements
let eleArr=[2,7,"Nandini Solanki",'g',7.0];
console.log(eleArr);

console.log("element at 4th index "+eleArr[4]);

eleArr[2]=9;
console.log(eleArr);

console.log("************************************************");
//array methods
//1.push
eleArr.push(8,"new item");
console.log(eleArr);

//2.pop
eleArr.pop();
console.log(eleArr);

//3.shift
eleArr.shift();
console.log(eleArr);

//4.unshift
eleArr.unshift("Nandini Solanki");
console.log(eleArr);