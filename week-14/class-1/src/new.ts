function hello(name : string) {
     console.log("Hello " + name);
}


function userDetails(user : {
     name : string, 
     age : number
}){
     console.log("The name is " + user.name);
     console.log("The age is " + user.age);
}

userDetails({
     name : "yash tyagi", 
     age : 21
});

interface UserType {
     name : string, 
     email : string, 
     age : number, 
}

function greet(user : UserType){
     console.log("The name is " + user.name);
     console.log(`The email is ${user.email} and the age of the user is ${user.age}`);
}

hello("yash");