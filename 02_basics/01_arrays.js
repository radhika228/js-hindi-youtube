//array

const myArr = [0, 1, 2, 3, 4, 5]

//Array methods

//myArr.push(9)
//myArr.pop()
//myArr.unshift(9)
//myArr.shift()
//myArr.includes(9)
//myArr.indexOf(3)

//const newArr = myArr.join()
//console.log(myArr);  // [0, 1, 2, 3, 4, 5]
//console.log(newArr); //0,1,2,3,4,5

//+++++++++++++++++++  slice and splice ++++++++++++++++++++

console.log(myArr.slice(1,3));   // [ 1, 2 ]

let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99, 100);
console.log(arr); // [1, 99, 100, 4]
