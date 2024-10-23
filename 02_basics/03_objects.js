// singleton
// Object.create;


// object litrels

const mysym= Symbol("key1");

const jsUser={
    name: "Adarsh",
    "full name": "Adarsh chaudhary",
    age: 23,
    [mysym]: "value1",
    location:"jaipur",
    email: "akul@google.com",
    IsloggedIn: false,
    lastLoginDaya: ['Monday', 'Friday', 'Saturday']
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mysym]);

jsUser.email="akul@microsoft.com"
// Object.freeze(jsUser);
jsUser.email="akul@chatgpt.com";
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello my base");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingtwo=function(){
    console.log(`This is ${this.name} smajhe`);
}
console.log(jsUser.greetingtwo());