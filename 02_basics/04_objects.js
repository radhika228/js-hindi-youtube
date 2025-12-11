const tinderUser = new Object()
console.log(tinderUser); // output -> {}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const tinder = {}
console.log(tinderUser); // output -> {}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const tUser = {}
tUser.id = "123abc"
tUser.name = "xyz"
console.log(tUser); //{ id: '123abc', name: 'xyz' }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const regularUser = {
    email : "some@gmail.com",
    fullName :{
        userfullname: {
            firstName:"Ram",
            lastName:"Gupta"
        }

    }

}

console.log(regularUser.fullName);  // { userfullname: { firstName: 'Ram', lastName: 'Gupta' } } 

console.log(regularUser.fullName.userfullname.firstName); // Ram

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 = {obj1 , obj2}
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } 

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
