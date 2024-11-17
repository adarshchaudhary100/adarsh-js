// // after ES6
// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

//     encryptpassword(){
//         return `${this.password}abb`
//     }

//     toUp(){
//         return `${this.password.toUpperCase()}`
//     }
// }

// const cofee=new user("adarsh","akul@google.com","miafnfa")
// console.log(cofee.encryptpassword());
// console.log(cofee.toUp());


// behind the scene

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

user.prototype.encryptpassword=function(){
    return `${this.password}abb`
}
user.prototype.toUp=function(){
    return `${this.password.toUpperCase()}`
}


const cofee=new user("adarsh","akul@google.com","miafnfa")
console.log(cofee.encryptpassword());
console.log(cofee.toUp());