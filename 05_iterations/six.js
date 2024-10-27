const coding =[ "js ", "ruby", "c++", "python"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);        ************foreach does not return any value 

const mynums=[1,2,3,4,5,6,7,8];

// const newnums= mynums.filter((num)=>num>4);  // no need to write return

// const newnums=mynums.filter((num)=>{
//     return num>4;                             // compulsory to write return
// })

const newnums= mynums.forEach((item)=>{
    if(item>4){
        console.log(item);
    }
})

console.log(newnums);

