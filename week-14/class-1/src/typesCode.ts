type Employee = {
     name : string, 
     email : string, 
     age : number, 
}

type Manager = {
     name : string, 
     email : string, 
     age : number, 
     department : string, 
}

// Intersection

type TeamLead = Employee & Manager

function leadDetails(user : TeamLead){
     console.log(`The name of the team lead is ${user.name} and the department which he is handling is ${user.department}`);
}

// Union

type newData = string | number;

function printData(data : newData){
     console.log("The new data is " + data);
}

printData("data");

leadDetails({
     name : "yash tyagi", 
     email : "yash@google.com", 
     age : 21, 
     department : "Full Stack Development"
});

 