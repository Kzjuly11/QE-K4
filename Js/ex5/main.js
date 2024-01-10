function abbrev_name(x){
      var str = x.trim().split(" ")
      if(str.length > 1){
        return (str[0] + " " + str[1].charAt(0) ) 
      }
      return str[0]
}
console.log(abbrev_name("robin signh"))