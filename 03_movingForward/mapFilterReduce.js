//Map
function twice (ele){
    return 2*ele;
}
let arr = [1,-6,-3];
console.log(arr);
let brr= arr.map(twice);
console.log(brr);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
let arr = [6,-3,9];
console.log(arr);
arr = arr.map(ele=>ele*ele);
console.log(arr);

//Filter

let arr = [1,9,2,4,6]
console.log(arr);
arr = arr.filter((ele)=>{
    if(ele%2==0) return true;
    else return false;

});
console.log(arr);

//Reduce

let arr = [1,2,3,4,7,9,6];
console.log(arr);
let x = arr.reduce(function(a,b){
    return a+b;
})
console.log(x);
