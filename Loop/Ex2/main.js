function findProductSign(a,b,c){
   var result = a*b*c
   if(result > 0){
    return "+"
   }
   else if(result < 0){
    return "-"
   }
   else {
    return "0"
   }
}
console.log(findProductSign(0,-1,2))





