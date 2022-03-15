//empty object
let obj={};
console.log(obj);

//object
let objNew={
    "first":"Nandini",
    "Age":25,
    last:'Solanki'
};
console.log(objNew);

//key can have any value
let capAmerica={
    Name:'Steve',
    Age:999,
    Friends:['Thor','Hulk','Tony'],
    address:{
        city:'Queens',
        state:'DC'
    },
    sayHi: function(){
        console.log("hi");
    }
}
console.log(capAmerica);

//calling or accessing individually
console.log(capAmerica.Name);
console.log(capAmerica.Friends[0]);
console.log(capAmerica.Friends);
console.log(capAmerica.address);
console.log(capAmerica.address.city);
capAmerica.sayHi();