function findLargestElement(numbers) {
  //   const largest = Math.max(...numbers);
  //   console.log(largest);

  numbers.sort();
  console.log(numbers[numbers.length - 1]);
}

findLargestElement([2, -19, 56, 107, 22, 45, 900]);
