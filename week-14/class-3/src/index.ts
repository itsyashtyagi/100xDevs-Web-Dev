// // interface User{
// //      name : string, 
// //      age : number,
// // }

// // function sumOfAge(user1 : User, user2 : User){
// //      return user1.age + user2.age;
// // }

// // const result = sumOfAge({
// //      name : "yash", 
// //      age : 21, 
// // }, {
// //      name : "raman", 
// //      age : 22
// // });

// // console.log(result);


// // Pick in TypeScript

// // interface Employee {
// //      name : string;
// //      email : string; 
// //      age : string; 
// //      designation : string; 
// //      address : string; 
// // };

// // type UpdatedProps = Pick<Employee, 'name' | 'email' | 'designation'>;

// // Partial in ts

// // type UpdatedPropsOptional = Partial<UpdatedProps>;

// // function employeeDetails(user : UpdatedPropsOptional){
// //      console.log(user.name);
// // }

// // Readonly in Typescript

// // const arr : ReadonlyArray<number> = [1, 2,3,4];

// // arr[0] = 23;

// // interface Config {
// //      baseUrl : string, 
// //      port : number
// // };

// // const config : Readonly<Config> = {
// //      baseUrl : "https://baseurl", 
// //      port : 3000, 
// // };

// // config.baseUrl = "yashtyagi";

// // Record and Maps

// type User = {
//      id : string, 
//      name : string
// }

// // type Users = {
// //      [key : string] : User
// // }

// // Now we can write the above Users using the Record also

// type Users = Record<string, User>;

// // And rember the Record is the typescript concept not the js concept

// const users : Users = {
//      "ras@1d" : {
//           id : "ras@1d", 
//           name : "yash"
//      }, 
//      "rad@1d" : {
//           id : "rad@1d", 
//           name : "yash"
//      }, 
     
// }

// // The above Users can be written using the Maps also;

// const userType = new Map<string , User>();

// userType.set("23sbhj", {id : "23sbhj", name : "yash tyagi"});
// userType.set("9890vjn", {id : "9890vjn", name : "raman"});

// const getUser = userType.get("23sbhj");
// console.log(getUser);

// // Exclude in ts

// type EventType = 'scroll' | 'mousemove' | 'click';
// type ExcludeType = Exclude<EventType, 'mousemove'>; // 'scroll' | 'click'

// const handleEvent = (event : ExcludeType) => {
//      console.log(`Handling Event : ${event}`);
// }

// handleEvent('scroll'); // OK
// // handleEvent('mousemove'); // This will shows the error

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// This is how you have use inter the type of the zod and can be used in the frontend of the react and nextjs

type UserProfileType = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody : UserProfileType = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);

