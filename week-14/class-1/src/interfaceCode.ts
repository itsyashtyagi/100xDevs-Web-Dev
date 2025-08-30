// interface UserType {
//      name : string, 
//      email : string, 
//      age : number,
// }

// interface AdminType {
//      adminDetails : UserType, 
//      isAdmin : boolean, 
// }

// function admin(user : AdminType){
//      console.log(user.isAdmin);
//      console.log("Below are the details of the admin");
//      console.log(`The name of the admin is ${user.adminDetails.name} and the age of the admin is ${user.adminDetails.age}`);
// }


// admin({
//      adminDetails : {
//           name : "yash tyagi", 
//           email : "yashtyagi@google.com", 
//           age : 21
//      }, 
//      isAdmin : true
// })


interface Person {
     name : string, 
     age : number, 
     greet(phrase : string) : void, 
}

class Employee implements Person{
     name : string; 
     age : number; 

     constructor(n : string, a : number){
          this.name = n;
          this.age = a;
     }

     greet(phrase : string){
          console.log("Hi " + phrase);
     }
}

const juniorEmployee = new Employee("yash", 21);
juniorEmployee.greet("there");
console.log(juniorEmployee.name);


// Abstract classes Concept

abstract class Shape{
     abstract name : string;

     abstract calculateArea() : number;

     describe() : void {
          console.log(`The shape of the name is ${this.name} and the area of it is ${this.calculateArea()} units squared`);  
     }
}


class Rectangle extends Shape{
     name = "Rectangle";

     constructor(public width:number, public height: number){
          super();
     }

     calculateArea(): number {
          return this.width * this.height;
     }

}

const rectangleObj = new Rectangle(2, 4);
rectangleObj.describe();