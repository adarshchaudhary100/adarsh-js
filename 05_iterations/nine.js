// reduce function**********************

const nums=[1,2,3,4];

// const mymnums=nums.reduce(function(acc,currval){
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc+currval;

// },10)

const mymnums=nums.reduce((acc,val)=>(acc+val),0)

console.log(mymnums);