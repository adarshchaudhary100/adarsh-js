// ************functions**********

function sayname(){
    console.log("A")
    console.log("D")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
}
// sayname();

// function addTwoNumbers(a,b){
//     console.log(a+b)
// }


function addTwoNumbers(a,b){
    // console.log(a+b)
    return a+b;
}

const result=addTwoNumbers(23,56);
// addTwoNumbers("a","3");
// console.log(result);

function loggin(username="akul"){
    if(!username){
        console.log("please logged In");
    }
    else{
        return `${username} just logged in`;
    }
}
// const message =loggin("adarsh");
// console.log(loggin());

// loggin(akul);


function calculateCartTotal(...num){
    return num;
}

console.log(234,234,356,6,5);

const user={
    username: "adarsh",
    rollno: "5",
    price: 1241
}

function newuser(anyuser){
        return `name of the user is ${anyuser.username} and its rollno is ${anyuser.rollno}`;
}

console.log(newuser(user));
newuser({
    username: "akul",
    rollno: "3"
})