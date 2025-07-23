let count = 1;

function main() {
  setTimeout(() => {
    console.log(count);
    count++;
    main();
  }, 1000);
}

main();
