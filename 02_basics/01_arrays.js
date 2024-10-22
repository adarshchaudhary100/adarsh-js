// array***************

const arr=["1234",2,3,5,6];
// console.log(arr);
// console.log(arr[0]);

const newarray=new Array(1,245,436,36,6);
// console.log(newarray.fill(2));



// array methods*************************

arr.push(23);
// console.log(arr);
arr.pop();
// console.log(arr);
 arr.unshift(3);
// console.log(arr);
arr.shift();
// console.log(arr.includes(7));

const myarr=arr.join();
// console.log(myarr);
// console.log(arr);

const na1=arr.slice(1,3);
const na2=arr.splice(1,3);
console.log(na1);
console.log(na2);
console.log(arr);

// slice does not change the array but splice change the original array*
