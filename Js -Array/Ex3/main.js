

function lastElement(array,n){
    if (array == null) 
    return 0 ; 
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0)); 
}
lastElement()
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([],3));
console.log(lastElement([7, 9, 0, -2],3));
console.log(lastElement([7, 9, 0, -2],6));
console.log(lastElement([7, 9, 0, -2],-3));
