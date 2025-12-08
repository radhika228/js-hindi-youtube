const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); // Array inside array in output
//console.log(marvel_heros[3][1]); // output will be flash

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros); // new array will come

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros); // same output as in concat

const anotherArr = [1,2,3,[4,5,6],7,8,[9,[10]]]
const realArr = anotherArr.flat(Infinity)
//console.log(realArr); // [1,2,3,4,5,6,7,8,9,10]

console.log(Array.isArray("Ram")); // false
console.log(Array.from("Ram")); // ['R','a','m']

let s1 = 100
let s2 = 200
let s3 =300
console.log(Array.of(s1,s2,s3)); // [100,200,300]

