// const promiseone= new Promise(function(resolve,reject){
//     // do and async task
//     // DB calls , cryptography,
//     setTimeout(function(){
//         console.log('Async task in completed');
//         resolve()
//         // reject();
//     },1000)
// })

// promiseone.then(function(){
//     console.log("Promised consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("task completed");
// })

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task3");
//         resolve({username: "adarsh", email:" akul@someone.com"})
//     },1000);
// })

// promisethree.then(function(user){
//     console.log(user);
// })


// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"adarsh", password:"123456"})
//             // resolve()
//         }
//         else{
//             reject(' ERROR: something went wrong');
//         }
//     },1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//      console.log(username)
// } ).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log('Finally finished'));

// console.log(username);

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            // console.log('')
            resolve({username:"Akul", password: "38452"});
        }
        else{
            reject("poam went wrong");
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}   
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data=await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log('E: ', error);   
//     }
// }
// getAllUsers();.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})