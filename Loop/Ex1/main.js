
function findLargestNumber(a,b) {   
    if(a > b){
        return a ; 
    }
    else if( b > a ){
        return b ; 
    }
    else {
        return "equal" ; 
    }
   
}
console.log(findLargestNumber(5,5)) ; 
