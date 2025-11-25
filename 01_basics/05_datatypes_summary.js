//data types
//1 primitive : 7 types => String ,Number ,Boolean, null, undefined ,Symbol, BigInt
//2 reference (non primitive) : Arrays, Objects, Functions

const id = Symbol('123')  //example of symbol primitive datatype
const bignumber = 4677878778899009n //example of bigint primitive datatype

//typeof null is "object"
//function below
const myFunction = function(){
    console.log("hello world")
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//MEMORY 
// Stack (Primitive) , Heap (Non-Primitive)
//stack => copy
//heap => reference