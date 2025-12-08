
// singleton -> constructor se banega ,literal se nhi
//object.create (constructor)


//object literals
const JsUser = {        //object declaration
    name : "Sam",
    "fullname":"Sam Tiwari",
    age : 19,
    location : "Bhopal",
    mail : "sam@google.com",
    isLoggedin : false,
    lastlogin : ["Monday","Saturday"]
}


//object access
console.log(JsUser.mail);
console.log(JsUser["mail"]); //use this always
console.log(JsUser["fullname"])
