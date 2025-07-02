function isAnagram(str1, str2){
     if(str1.length !== str2.length){
          return false;
     } else {
          const str1Array = str1.split('');
          const str2Array = str2.split('');
          str1Array.sort();
          str2Array.sort();
          const str1Sorted = str1Array.join('');
          const str2Sorted = str2Array.join('');

          if(str2Sorted === str1Sorted){
               return true;
          } else {
               return false;
          }
     }
}

function isAnagramOptimized(str1, str2){
     if(str1.length !== str2.length){
          return false;
     } 

     function sortString(str){
          return str.toLowerCase().split('').sort().join('');
     }

     return sortString(str1) === sortString(str2);
}

const result = isAnagramOptimized("hello", "hello!");
console.log(result);