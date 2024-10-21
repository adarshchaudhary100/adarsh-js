// **********************Primitive
//  7 types

// null
// Number
// Boolean
// Symbol
// String
// bigint
// undefined
const Id= Symbol('123');
const anotherID=Symbol('123');
// console.log(Id==anotherID);
// console.log(Id===anotherID);


//************ */ Non_Primitive

// Arrays, objects, functions

const heros=["akul", "ekta", "frooti"];
let obj={
    name: "adarsj",
    age: 34,
}

const myfunction=function(){
    console.log("Hello world")
}
console.log(myfunction);
console.log(typeof(myfunction));
