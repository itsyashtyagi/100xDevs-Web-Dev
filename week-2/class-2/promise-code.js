const fs = require("fs");

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 seconds have passed");
}

// setTimeoutPromisified(3000).then(callback);

// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("hello");
//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);

// The alternative approch of the above function is :-

// function step3() {
//   console.log("hello there");
// }

// function step2() {
//   console.log("hi there");
//   setTimeout(step3, 5000);
// }

// function step1() {
//   console.log("hi");
//   setTimeout(step2, 3000);
// }
// setTimeout(step1, 1000);

// Now the promisified approch for that function which have the callback hell

// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hi there");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });

// now below is the promisified approch without the callback hell

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hi there");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });

// async and await

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(3000);
  console.log("hi there");
  await setTimeoutPromisified(5000);
  console.log("hello there");
}

solve();
