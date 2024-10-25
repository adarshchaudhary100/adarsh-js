const useremail="adarsh@google.com";

if(useremail){
    console.log("mil gyi");
}
else{
    console.log("nhi mili");
    
}


// false values  
// 0,false, -0, BigInt 0n, "", null, NaN, undefined

// Nullish coalescing operator (??): null undefined

let val;
// val=5??10;

val= undefined ?? 23;
// val=null??12;
val=24??53??5643;

console.log(val);


// terniary operator

// condition ? true :false;

2==4?console.log("NOt equal"):console.log("equal");