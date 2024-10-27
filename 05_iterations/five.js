// foreach loop****************
 const coding =[ "js ", "ruby", "c++", "python"]
 
//  coding.forEach(function(item){
//         console.log(item);
//  })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr);
// })


const mycoding=[
    {
        firstlang: "bhailang",
        type: "bhai"
    },
    {
        firstlang: "javascript",
        type: "js"
    },
    {
        firstlang: "c++",
        type: "cpp"
    }
]

mycoding.forEach(function(obj){
    console.log(obj.firstlang);
})