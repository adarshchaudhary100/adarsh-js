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


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"adarsh", password:"123456"})
        }
    },1000);
})