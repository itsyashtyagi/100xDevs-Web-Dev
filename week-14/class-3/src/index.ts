interface User{
     name : string, 
     age : number,
}

function sumOfAge(user1 : User, user2 : User){
     return user1.age + user2.age;
}

const result = sumOfAge({
     name : "yash", 
     age : 21, 
}, {
     name : "raman", 
     age : 22
});

console.log(result);


// Pick in TypeScript

interface Employee {
     name : string;
     email : string; 
     age : string; 
     designation : string; 
     address : string; 
};

type UpdatedProps = Pick<Employee, 'name' | 'email' | 'designation'>;

// Partial in ts

type UpdatedPropsOptional = Partial<UpdatedProps>;

function employeeDetails(user : UpdatedPropsOptional){
     console.log(user.name);
}

// Readonly in Typescript

const arr : ReadonlyArray<number> = [1, 2,3,4];

// arr[0] = 23;

interface Config {
     baseUrl : string, 
     port : number
};

const config : Readonly<Config> = {
     baseUrl : "https://baseurl", 
     port : 3000, 
};

// config.baseUrl = "yashtyagi";



