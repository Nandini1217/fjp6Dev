let b=true;
let n=15;
for(i=2;i*i<=n;i++){
    if(n%i==0){
        b=false;
    }
}
if(b==true){
    console.log("prime");
}else
console.log("not prime");