const fs = require("fs");

function fileRead() {
  //   fs.readFile("a.txt", "utf-8", function (err, data) {
  //     console.log(data);
  //   });
  const result = fs.readFileSync("a.txt", "utf-8");
  console.log(result);
}

async function heavyOperation() {
  await fileRead();
  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

async function main() {
  //   await fileRead();
  heavyOperation();
}

main();
