//function without parameter and return type
function sayHello(){
    console.log("hello world");
}

sayHello();

//function with parameter
function sum(n1,n2){
    let addition=n1+n2;
    console.log("sum of two numbers is "+addition);
}
sum(7,8);

//function with return type
function multiply(num1,num2){
    return num1*num2;
}
let ans=multiply(7,8);
console.log("product of two numbers is "+ans);
 
//storing functions
let a= function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

//IIFE
//Without parameter
(function(){
    console.log("Hello from IIFE");
})();

//with parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5);