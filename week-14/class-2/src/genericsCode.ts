// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.

function firstElement(arr : number[] | string[]){
     return arr[0];
}

const upperResult = firstElement(["yash", "tyagi"]);

// console.log(upperResult?.toLowerCase());


// The above function can be implemented using the concept of Generics in Typescript

function identify<T>(arg : T) : T{
     return arg;
}

let otput1 = identify<String>("myString");
let output2 = identify<number>(135);
console.log(otput1);
console.log(output2);

function findFirstElement<T>(arr : T[]){
     return arr[0];
}
const result = findFirstElement<string>(["yash", "tyagi", "btech"]);
console.log(result?.toLowerCase());