/*
function calculateTime(n) {
  let sum = 0;
  let startTime = Date.now();
  console.log(startTime);
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  let endTime = Date.now();
  console.log(endTime);
  return (endTime - startTime) / 1000;
}

const result = calculateTime(10000000000);
console.log(result);


use can also use the performane.now() in place of Date.now()
*/

const time = new Date().getTimezoneOffset();
console.log(time);
