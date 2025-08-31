interface User{
     name : string,
     email : string, 
     age : number, 
     addess? : {
          city : string, 
          country : string,
          pinbcode : number
    }
}

let User1 : User = {
     name  : "yash tyagi", 
     email : "yashtyagi8006@gmail.com", 
     age : 21,
}