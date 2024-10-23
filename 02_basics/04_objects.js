// ************objects
// const tinderuser=new Object();     **********singleton object;
const tinderuser={};    
        //   **********non-singleton Object;

tinderuser.id="23"
tinderuser.name="ada";
tinderuser.IsLoggedIn=false;

// console.log(tinderuser);

const regularUser={
    email: "akul@google.com",
    fullname: {
        firstname: "adarsh",
        lastname: "chaudhary",
        address:{
            vill:"dhanoura",
            state: "UP"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.address.state);

const obj1={1: "ada" , 2: "rsh"};
const obj2={3: "cha" , 4: "ary"};


// const obj3={obj1,obj2};
// const obj4=obj1+obj2;
const obj3=Object.assign({},obj1,obj2);


const obj4={...obj1, ...obj2};
// console.log(obj4);


const user=[
    {
        id: "1",
        name: "adarsh"
    },
    {
        id: "2",
        name: "aklu"
    }
]

// console.log(user[1]);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// *****************these outcomes will be in array forms******************

// console.log(tinderuser.hasOwnProperty('names'));



const course={
    courseName: "js",
    courseTeacher: "youtube"
}


console.log(course.courseTeacher);
// *******destructure******************
const {courseTeacher: guru}=course

console.log(guru);


// ***json syntax ************

// {
//     "name": "adarsh",
//     "course": "js",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]