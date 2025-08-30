"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    console.log("Hello " + name);
}
function userDetails(user) {
    console.log("The name is " + user.name);
    console.log("The age is " + user.age);
}
userDetails({
    name: "yash tyagi",
    age: 21
});
function greet(user) {
    console.log("The name is " + user.name);
    console.log(`The email is ${user.email} and the age of the user is ${user.age}`);
}
hello("yash");
//# sourceMappingURL=new.js.map