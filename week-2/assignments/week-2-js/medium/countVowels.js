function coutVowels(str) {
  //   const strLowerCase = str.toLowerCase();
  //   let count = 0;
  //   for (let i = 0; i < strLowerCase.length; i++) {
  //     switch (strLowerCase[i]) {
  //       case "a":
  //         count++;
  //         break;
  //       case "e":
  //         count++;
  //         break;
  //       case "i":
  //         count++;
  //         break;
  //       case "o":
  //         count++;
  //         break;
  //       case "u":
  //         count++;
  //         break;
  //       default:
  //     }
  //   }
  //   return count;

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const result = coutVowels("taTYugXTo");
console.log(result);
