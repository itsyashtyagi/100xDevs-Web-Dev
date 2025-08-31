// Create two types called User and Admin
// Create a functiion that takes either a user or an admin as an input, and returns a string saying "Welcome , [name]"

type User = {
     name : string, 
     email : string, 
     age : number
}

type Admin = {
     name : string, 
     email : string, 
}

function greet(user : User | Admin){
     console.log(user.name);
}

greet({
     name : "yash tyagi", 
     email : "yashtyagi@google.com"
})


