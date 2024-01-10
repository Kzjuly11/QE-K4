function truncate(str,length){
  var x = str.length ; 
   if(x > 0){
      return str.slice(0,length)
   }
}
console.log(truncate("robin signh",4))