function isPallindrome(str) {
  const strLowerCase = str.toLowerCase();
  let start = 0;
  let end = strLowerCase.length - 1;
  const mid = Math.floor(strLowerCase.length / 2);
  while (start <= mid) {
    if (strLowerCase[start] === strLowerCase[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;

  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  //   let filteredStr = "";
  //   for (let char of str) {
  //     if (
  //       (char >= "a" && char <= "z") ||
  //       (char >= "A" && char <= "Z") ||
  //       (char >= "0" && char <= "9")
  //     ) {
  //       filteredStr += char.toLowerCase();
  //     }
  //   }
}

const result = isPallindrome("abcCBA");
console.log(result);
