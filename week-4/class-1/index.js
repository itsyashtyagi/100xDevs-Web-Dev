/* Class CODE 

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

*/

/* ------------- Assignment -1 ---------------- */

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();
const path = require("path");

const filePath = path.join(__dirname, "a.txt");

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the numbre of files in a file")
  .argument("<file>", "file to Count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      console.log("Inside the fs function");
      if (err) {
        console.log(err);
      } else {
        const lines = data.split("\n").length;
        console.log(`There are ${lines} lines in ${file} file`);
      }
    });
  });
