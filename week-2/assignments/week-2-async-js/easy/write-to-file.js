const fs = require("fs").promises;

// fs.writeFile(
//   "a.txt",
//   "Hi there form the write file async function call",
//   function (err) {
//     if (err) {
//       console.log();
//     } else {
//       console.log("Done successfully");
//     }
//   }
// );

async function writeToFile(fileName, content) {
  try {
    await fs.writeFile(fileName, content);
    console.log("Done successfuly");
  } catch (e) {
    console.log(`Error : ${e}`);
  }
}

writeToFile("a.txt", "New Data Entered successfully");
