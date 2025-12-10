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