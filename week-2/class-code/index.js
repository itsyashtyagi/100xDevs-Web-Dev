const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, contents) {
     let sum = 0;
     for(let i = 0;i< 10000; i++){
          sum = sum + i;    
     }
     console.log(contents);
});


console.log("hello world");

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content2);