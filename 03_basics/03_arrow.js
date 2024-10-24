const user={
    username: "Adarsh",
    course: "CSE",
    welcomemessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
        
    }
}
// console.log(user);
// console.log(this.username);
// console.log(user.welcomemessage());
// user.username="ekta";
// console.log(user.welcomemessage());
// console.log(this);


// **************this function used in object , not in functions****************
// function akul(){
//     let username="apna"
//     console.log(this.username);   // gives undefined............
// }
// akul();

// const akul= function(){
//         let username="apna"
//         console.log(this.username);
// }


const akul=()=>{
        let username="apna"
        console.log(this.username);
        console.log(this);
}

// console.log(akul);
// akul();


// *******arrow functions

// const addtwo=(x,y)=>{
//     return x+y;
// }


// const addtwo=(x,y)=> (x+y);

const addtwo=(x,y)=> ({username:"Don"});

console.log(addtwo(24,52));
