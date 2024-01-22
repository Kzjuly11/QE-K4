function findLargestNumber(array) {
   let largest = array[0];
   for (let i = 1; i < array.length; i++) {
     if (array[i] > largest) {
       largest = array[i];
     }
   }
   return largest;
 }
 
console.log(findLargestNumber([1,2,3,4,5])); 