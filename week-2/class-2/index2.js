const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     let trimData = data.trim();
//     console.log(trimData);
//     trimData = trimData + " New Data added";
//     fs.writeFile("a.txt", trimData, (err) => {
//       if (err) throw Error;
//       console.log("The file has been saved successfully!!!");
//     });
//   }
// });

// Promisified approch for the above function

function cleanFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, contents) {
      if (err) {
        reject("Error while reading the file");
      } else {
        data = contents.trim();
        fs.writeFile(filePath, data, function (err) {
          if (err) {
            reject("Error while updated the file");
          } else {
            resolve("Done successfully");
          }
        });
      }
    });
  });
}

cleanFile("a.txt")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
// async function main() {
//   await cleanFile("a.txt");
//   console.log("Done cleaning the file");
// }

// main();
