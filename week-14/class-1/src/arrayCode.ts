let arr: number[] = [1, 2, 4, 5, 6, 12, 6, 3, 9, 19, 3, 2, 1];

function findingBiggestNumber(arr : number[]) : number{
     let sortedArray : number[] = arr.sort((n1, n2) => n1 -n2);
     let sortedArrayLenth : number = sortedArray.length;
     return sortedArray[sortedArrayLenth -1] ?? 0;
}

console.log(findingBiggestNumber(arr));