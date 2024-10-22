const marvel_heroes=["thor", "Ironman", "spiderman"];
const dc_heroes=["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// marvel_heroes.concat(dc_heroes);
const newmarvel_heroes=marvel_heroes.concat(dc_heroes);
// console.log(newmarvel_heroes);

// dc_heroes.concat(marvel_heroes);
// console.log(dc_heroes);

const new_heroes=[...dc_heroes, ...marvel_heroes];
console.log(new_heroes);

const another_array=[23,435,6,73,[2,34,26],26,[26,26,[262,7,8,43],62],26,288];
const real_array=another_array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("akul"));
console.log(Array.from("adarsh"));

let score1=10;
let score2=20;
let score3=30;
console.log(Array.of(score1,score2,score3));