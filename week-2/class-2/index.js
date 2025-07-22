const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   setTimeout(() => {
//     console.log(data);
//   }, 5000);
// });

/*

setTimeout(() => {
  //   const result = fs.readFileSync("a.txt", "utf-8");
  //   console.log(result);
  setTimeout(() => {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log(data);
    });
  }, 2000);
  console.log("hello");
}, 5000);

*/
// console.log("hello");

let counter = 0;

setInterval(() => {
  console.log(counter);
  counter++;
}, 1000);
