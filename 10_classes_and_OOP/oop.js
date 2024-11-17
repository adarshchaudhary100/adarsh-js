// const user={
//     name: "Adarsh",
//     logincount:4,
//     stayLoggedIn:true, 
//     getuserDetails:function(){
//         // console.log(" Mission Successful")
//         // console.log(`${this.name}`)
//         console.log(this)
//     }
// }

// console.log(user.getuserDetails());

function user(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    return this;
}

const userone=new user("adarsh",32,true);
const usertwo=new user("akul",26,false);

console.log(userone.constructor);
// console.log(usertwo);