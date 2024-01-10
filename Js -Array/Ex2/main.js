function FirstElement(array,n){
    if (array == null) 
    return  [] ; 
    if (n == null) 
    return array[0];
    if (n < 0){
    return [];
    }
    else if(n > 0){
    return array.slice(0, n);
    }
}
FirstElement()
console.log(FirstElement([7, 9, 0, -2]));
console.log(FirstElement([],3));
console.log(FirstElement([7, 9, 0, -2],3));
console.log(FirstElement([7, 9, 0, -2],6));
console.log(FirstElement([7, 9, 0, -2],-3));
