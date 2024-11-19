const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);
// console.log(Math.PI);
// Math.PI=4;
// console.log(Math.PI);

const chai={
    name:'Ginger chai',
    price:230,
    isAvailable:true,
    orderchai: function(){
        console.log('fat gyi');
        
    }
}
console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:false
})
// const newdes=Object.getOwnPropertyDescriptor(chai,"name");
// console.log(newdes);


for (let [key,values] of Object.entries(chai)){
    if(typeof values!=='function'){
        console.log(`${key}: ${values}`)
    }
}